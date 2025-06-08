'use client'

import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

const UserToggle = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen)
  return (
    <button className="relative cursor-pointer" onClick={toggleNotification}>
      <FaUserCircle className="w-9 h-9 text-gray-400" />
      {isNotificationOpen && (
        <div className="absolute top-10 -right-1 w-28 bg-white rounded-md shadow-md">
          <p className="px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
            <MdLogout className="w-5 h-5" />
            로그아웃
          </p>
        </div>
      )}
    </button>
  )
}

export default UserToggle
