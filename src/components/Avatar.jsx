import React from "react";

function Avatar({ src, size = 45 }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />
  );
}

export default Avatar;