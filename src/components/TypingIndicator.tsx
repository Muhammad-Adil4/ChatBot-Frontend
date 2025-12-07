import React from 'react';
import { Sparkles } from 'lucide-react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2 p-3 bg-[#141518] rounded-xl shadow-sm">
    {/* Sparkles Icon */}
    <Sparkles size={16} className="text-purple-400 animate-pulse drop-shadow-md" />

    {/* Bouncing dots */}
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s] shadow-sm shadow-blue-500/50"></div>
      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s] shadow-sm shadow-purple-500/50"></div>
      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce shadow-sm shadow-pink-500/50"></div>
    </div>
  </div>
);
