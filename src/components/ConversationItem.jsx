import React from 'react'
import Avatar from './Avatar.jsx'

export default function ConversationItem({ user, lastMessage, onClick, active }) {
  return (
    <div className="convo-item" onClick={() => onClick(user)} style={{ background: active ? '#f6fff6' : undefined }}>
      <Avatar src={user.avatar} alt={user.name} />
      <div className="convo-info">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="convo-name">{user.name}</div>
          <div style={{fontSize:12, color:'#999'}}>{lastMessage ? new Date(lastMessage.ts).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : ''}</div>
        </div>
        <div className="convo-last">{lastMessage ? lastMessage.text : (user.about || '')}</div>
      </div>
    </div>
  )
}
