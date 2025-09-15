import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import ChatWindow from './components/ChatWindow.jsx'

export default function App() {
  const [activeConv, setActiveConv] = useState(null) // conversationId (user id)

  return (
    <div className="app">
      <Sidebar onSelectConversation={(u) => setActiveConv(u.id)} activeId={activeConv} />
      <ChatWindow conversationId={activeConv} />
    </div>
  )
}
