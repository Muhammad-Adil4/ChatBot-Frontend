import type { Message } from '../lib/types';
import { Sparkles, User } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
   <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
  <div className={`flex gap-4 flex-wrap max-w-full ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
    
    {/* Avatar */}
    <div className="shrink-0 mt-1">
      {message.sender === 'ai' ? (
        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
          <Sparkles size={16} className="text-blue-500" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User size={16} className="text-gray-500" />
        </div>
      )}
    </div>

    {/* Content */}
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
      <div className="font-semibold text-xs text-gray-400 mb-1 px-1">
        {isUser ? 'You' : 'Gemini'}
      </div>
      <div className={`text-base leading-relaxed p-3 rounded-2xl whitespace-pre-wrap wrap-break-word ${
        isUser 
          ? 'bg-blue-100 text-gray-900 rounded-tr-sm' 
          : 'bg-gray-100 text-gray-900'
      }`}>
        {message.content}
      </div>
    </div>

  </div>
</div>
  );
};
