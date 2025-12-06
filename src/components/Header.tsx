import React from 'react';
import { Menu, History, } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => (
  <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-sm">
    <div className="flex items-center gap-3">
      <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
        <Menu size={24} />
      </button>
      <span className="text-lg font-medium text-gray-600 flex items-center gap-2">
        Gemini Pro <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">Experimental</span>
      </span>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
        <History size={20} className="md:hidden" />
      </button>
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
        JD
      </div>
    </div>
  </header>
);
