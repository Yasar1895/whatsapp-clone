import React from 'react'
import Avatar from './Avatar.jsx'

export default function ChatHeader({ user }) {
  if (!user) return <div className="chat-header" />
  return (
    <div className="chat-header">
      <Avatar src={user.avatar} alt={user.name} />
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{fontWeight:700}}>{user.name}</div>
        <div style={{fontSize:12, color:'#666'}}>{user.about || 'Last seen recently'}</div>
      </div>
    </div>
  )
}
