'use client'

import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

export default function TaskItem() {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleToggle = () => {
    setIsCompleted(prev => !prev)
  }

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 부모 클릭 이벤트 방지
    console.log('Menu clicked')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <li className="w-full">
      <div
        className="w-full rounded-lg p-3 flex gap-0 hover:bg-gray-50 cursor-pointer"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Toggle task completion: ${isCompleted ? 'completed' : 'incomplete'}`}
      >
        <div className="flex items-start gap-3 flex-1">
          <div
            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              isCompleted ? 'bg-blue-500 border-blue-500' : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {isCompleted && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <p className={`text-sm leading-relaxed ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
            Task Item
          </p>
        </div>
        <button
          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded"
          onClick={handleMenuClick}
          aria-label="Task options menu"
        >
          <BsThreeDots className="w-4 h-4" />
        </button>
      </div>
    </li>
  )
}
