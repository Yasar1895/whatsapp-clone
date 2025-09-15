import React from 'react'

export default function Avatar({ src, alt, size = 44 }) {
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <img src={src} alt={alt || 'avatar'} />
    </div>
  )
}
