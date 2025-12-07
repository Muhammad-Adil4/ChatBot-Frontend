import React from 'react'

interface Props {
  message: {
    id: number
    content: string
    sender: 'user' | 'bot'
  }
}

const MessageItem: React.FC<Props> = ({ message }) => {
  const isUser = message.sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl break-words
          ${isUser 
            ? 'bg-blue-500 text-white shadow-md shadow-blue-400/30' 
            : 'bg-[#1c1f24] text-gray-300 shadow-sm shadow-black/20'} 
          `}
      >
        {message.content}
      </div>
    </div>
  )
}

export default MessageItem
