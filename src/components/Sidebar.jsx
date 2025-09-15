import React, { useState, useMemo } from 'react'
import users from '../data/users.js'
import initialMessages from '../data/messages.js'
import SearchBox from './SearchBox.jsx'
import ConversationItem from './ConversationItem.jsx'
import { loadState, saveState } from '../utils/storage.js'

export default function Sidebar({ onSelectConversation, activeId }) {
  const [query, setQuery] = useState('')

  // load last messages (check localStorage first)
  const persisted = loadState()
  const messages = persisted?.messages || initialMessages

  // build conversations list (other participants)
  const convos = useMemo(() => {
    // users except current user (users[0] is 'You')
    return users.slice(1).map(u => {
      const thread = messages[u.id] || []
      const last = thread.length ? thread[thread.length - 1] : null
      return { user: u, lastMessage: last }
    })
  }, [messages])

  // simple search filter
  const filtered = convos.filter(c => c.user.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="app-title">Chat</div>
        <div style={{fontSize:12, color:'#666'}}>Online</div>
      </div>

      <SearchBox value={query} onChange={setQuery} />

      <div className="conversations">
        {filtered.map(c => (
          <ConversationItem
            key={c.user.id}
            user={c.user}
            lastMessage={c.lastMessage}
            onClick={onSelectConversation}
            active={activeId === c.user.id}
          />
        ))}
      </div>
    </aside>
  )
}
