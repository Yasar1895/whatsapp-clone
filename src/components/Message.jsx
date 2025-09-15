import React from "react";

function Message({ msg }) {
  const isMe = msg.from === "Me";
  return (
    <div className={`message ${isMe ? "me" : "other"}`}>
      <div className="bubble">
        <p>{msg.text}</p>
        <span className="time">{msg.time}</span>
      </div>
    </div>
  );
}

export default Message;