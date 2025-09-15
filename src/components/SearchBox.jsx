import React from 'react'

export default function SearchBox({ value, onChange, placeholder = 'Search or start new chat' }) {
  return (
    <div className="search-wrap">
      <input
        className="search-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
