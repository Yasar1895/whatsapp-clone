import React, { useEffect, useRef, useState } from 'react'
import users from '../data/users.js'
import initialMessages from '../data/messages.js'
import { loadState, saveState } from '../utils/storage.js'
import Message from './Message.jsx'
import ChatHeader from './ChatHeader.jsx'
import Compose from './Compose.jsx'

export default function ChatWindow({ conversationId }) {
  const [messagesMap, setMessagesMap] = useState(() => {
    const persisted = loadState()
    return persisted?.messages || initialMessages
  })

  const scrollRef = useRef(null)

  useEffect(() => {
    // persist on changes
    saveState({ messages: messagesMap })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messagesMap])

  // scroll to bottom when messages change or conversationId change
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messagesMap, conversationId])

  if (!conversationId) {
    return (
      <div className="chat">
        <ChatHeader user={null} />
        <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', color:'#666'}}>Select a conversation</div>
      </div>
    )
  }

  const user = users.find(u => u.id === conversationId)
  const thread = messagesMap[conversationId] || []

  const handleSend = (text) => {
    const id = 'm' + Math.random().toString(36).slice(2,9)
    const msg = { id, from: 'u1', to: conversationId, text, ts: Date.now() }
    const next = { ...messagesMap, [conversationId]: [...thread, msg] }
    setMessagesMap(next)

    // simulate reply (simple)
    setTimeout(() => {
      const replyId = 'm' + Math.random().toString(36).slice(2,9)
      const reply = { id: replyId, from: conversationId, to: 'u1', text: "👍 Got it", ts: Date.now() }
      setMessagesMap(prev => ({ ...prev, [conversationId]: [...(prev[conversationId]||[]), reply] }))
    }, 1200)
  }

  return (
    <div className="chat">
      <ChatHeader user={user} />

      <div className="chat-messages" ref={scrollRef}>
        {thread.length === 0 && <div style={{color:'#777'}}>No messages yet. Say hi!</div>}
        {thread.map(m => <Message key={m.id} msg={m} me={m.from === 'u1'} />)}
      </div>

      <Compose onSend={handleSend} />
    </div>
  )
}
