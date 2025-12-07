import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSuggestionClick }) => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">

    {/* Icon box */}
    <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-4">
      <Sparkles className="w-12 h-12 text-white drop-shadow-md" />
    </div>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
      bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 pb-2">
      Hello, User
    </h1>

    {/* Subtitle */}
    <p className="text-xl text-gray-400 font-medium">How can I help you today?</p>

    {/* Suggestions */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mt-8">
      {[
        'Explain quantum computing',
        'Write a React component',
        'Plan a trip to Japan',
        'Debug my Python code'
      ].map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
          className="p-4 
            bg-[#141518] 
            hover:bg-[#1d1f23] 
            rounded-xl 
            text-left 
            text-sm 
            text-gray-300 
            transition-all 
            border border-gray-800 
            hover:border-gray-700
            hover:shadow-lg hover:shadow-black/30"
        >
          {suggestion}
        </button>
      ))}
    </div>

  </div>
);
