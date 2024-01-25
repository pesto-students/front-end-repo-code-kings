import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-[90%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-gray-600 absolute mt-[0.5%] ml-[1%]"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search Exercise"
        className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-full pl-10 text-2xl"
      />
    </div>
  )
}

export default SearchBar
