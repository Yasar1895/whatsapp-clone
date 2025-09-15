import React from "react";
import ConversationItem from "./ConversationItem.jsx";

function Sidebar({ users, onSelectUser }) {
  return (
    <div className="sidebar">
      <h2>Chats</h2>
      {users.map(user => (
        <ConversationItem
          key={user.id}
          user={user}
          onClick={() => onSelectUser(user)}
        />
      ))}
    </div>
  );
}

export default Sidebar;