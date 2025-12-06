import React from 'react';
import { Plus, MessageSquare, Settings, LogOut, Compass, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNewChat }) => {
  const recentChats = ["React Code Refactoring", "Contract Review v2", "Marketing Email Draft", "Python Data Analysis"];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#f0f4f9] text-gray-800 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col h-full border-r border-gray-200/50`}
      >
        <div className="p-4 pt-6">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <span className="font-semibold text-gray-600">Menu</span>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
              <X size={20} />
            </button>
          </div>
          
          <button 
            onClick={() => { onNewChat(); onClose(); }}
            className="w-full flex items-center gap-3 bg-[#dde3ea] hover:bg-[#d0d7e0] text-gray-700 px-4 py-3 rounded-full transition-colors duration-200 shadow-sm"
          >
            <Plus size={20} className="text-gray-600" />
            <span className="text-sm font-medium">New chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2">
          <div className="text-xs font-medium text-gray-500 px-3 mb-2">Recent</div>
          <div className="flex flex-col gap-1">
            {recentChats.map((chat, idx) => (
              <button key={idx} className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-full hover:bg-[#e6eaf1] transition-colors text-left truncate group">
                <MessageSquare size={16} className="text-gray-500 group-hover:text-gray-700 shrink-0" />
                <span className="truncate">{chat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 mt-auto space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#e6eaf1] transition-colors">
            <Compass size={18} />
            <span>Explore</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-[#e6eaf1] transition-colors">
            <Settings size={18} />
            <span>Settings</span>
          </button>
          <div className="pt-2 mt-2 border-t border-gray-200/50">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut size={18} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
