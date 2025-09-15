import React from 'react'

export default function Message({ msg, me }) {
  return (
    <div className={`message ${me ? 'me' : 'them'}`}>
      <div>{msg.text}</div>
      <span className="ts">{new Date(msg.ts).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
    </div>
  )
}
