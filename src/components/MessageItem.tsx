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
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}

export default MessageItem
