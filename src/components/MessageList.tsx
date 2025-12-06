import React, { useRef, useEffect } from 'react'
import MessageItem from './MessageItem'

interface Message {
  id: number
  content: string
  sender: 'user' | 'bot'
}

interface Props {
  messages: Message[]
}

const MessageList: React.FC<Props> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom on new message
  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  return (
    <div ref={containerRef} className="flex-1 overflow-auto p-4 space-y-3">
      {messages.map(msg => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  )
}

export default MessageList
