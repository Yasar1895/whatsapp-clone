import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";
import Compose from "./Compose.jsx";

function ChatWindow({ user, messages: initialMessages }) {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (text) => {
    const newMsg = {
      from: "Me",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, newMsg]);

    // Fake reply after 1.5 sec
    setTimeout(() => {
      const replies = [
        "Sounds good!",
        "Okay 👍",
        "Haha 😂",
        "I’ll check and let you know",
        "Cool 😎",
        "Exactly!",
        "Really?",
        "Got it ✅"
      ];
      const replyMsg = {
        from: user.name,
        text: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1500);
  };

  useEffect(() => {
    setMessages(initialMessages);
  }, [user, initialMessages]);

  return (
    <div className="chat-window">
      <div className="chat-header">{user.name}</div>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <Message key={idx} msg={msg} />
        ))}
      </div>
      <Compose onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;