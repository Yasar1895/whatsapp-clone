import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import users from "./data/users.js";
import messages from "./data/messages.js";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      <Sidebar users={users} onSelectUser={setSelectedUser} />
      {selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={messages[selectedUser.id] || []}
        />
      ) : (
        <div className="empty">Select a conversation</div>
      )}
    </div>
  );
}

export default App;