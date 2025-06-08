'use client'

import { useState } from 'react'
import { IoMdClose, IoMdSearch } from 'react-icons/io'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const resetSearch = () => setSearch('')
  return (
    <div className="flex items-center rounded-full px-3 py-1 bg-white w-[500px]">
      <label htmlFor="search">
        <IoMdSearch className="text-gray-500 w-6 h-6" />
      </label>
      <input
        type="text"
        id="search"
        className="w-full px-2 py-1 focus:outline-none placeholder:text-gray-500"
        placeholder="검색"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && (
        <button className="text-gray-500" onClick={resetSearch}>
          <IoMdClose className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default SearchInput
