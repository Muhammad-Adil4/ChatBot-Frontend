import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSuggestionClick }) => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">
    <div className="bg-linear-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg mb-4">
      <Sparkles className="w-12 h-12 text-white" />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 pb-2">
      Hello, User
    </h1>
    <p className="text-xl text-gray-400 font-medium">How can I help you today?</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mt-8">
      {['Explain quantum computing', 'Write a React component', 'Plan a trip to Japan', 'Debug my Python code'].map((suggestion) => (
        <button 
          key={suggestion} 
          onClick={() => onSuggestionClick(suggestion)}
          className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left text-sm text-gray-700 transition-all border border-transparent hover:border-gray-200"
        >
          {suggestion}
        </button>
      ))}
    </div>
  </div>
);
