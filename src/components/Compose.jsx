import React, { useState } from 'react'

export default function Compose({ onSend }) {
  const [text, setText] = useState('')

  const send = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    onSend(trimmed)
    setText('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="compose">
      <textarea
        className="input"
        rows={1}
        placeholder="Type a message"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="btn" onClick={send}>Send</button>
    </div>
  )
}
