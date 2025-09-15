import React from "react";
import Avatar from "./Avatar.jsx";

function ConversationItem({ user, onClick }) {
  return (
    <div className="conversation-item" onClick={onClick}>
      <Avatar src={user.avatar} />
      <div className="conversation-info">
        <h4>{user.name}</h4>
        <p>Tap to chat</p>
      </div>
    </div>
  );
}

export default ConversationItem;