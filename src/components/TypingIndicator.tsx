import React from 'react';
import { Sparkles } from 'lucide-react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 p-4 bg-transparent">
    <Sparkles size={16} className="text-blue-500 animate-pulse mr-2" />
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
    </div>
  </div>
);
