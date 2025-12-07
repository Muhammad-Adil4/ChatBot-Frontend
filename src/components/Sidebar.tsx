import React from 'react';
import { Plus, MessageSquare, Settings, LogOut, Compass, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNewChat }) => {
  const recentChats = [
    "React Code Refactoring",
    "Contract Review v2",
    "Marketing Email Draft",
    "Python Data Analysis"
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden 
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 
        bg-[#0e0f12] text-gray-200 transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        flex flex-col h-full border-r border-gray-700`}
      >
        {/* Top */}
        <div className="p-4 pt-6">
          <div className="flex items-center justify-between mb-6 md:hidden">
            <span className="font-semibold text-gray-300">Menu</span>
            <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full">
              <X size={20} />
            </button>
          </div>

          <button
            onClick={() => { onNewChat(); onClose(); }}
            className="w-full flex items-center gap-3 
            bg-[#1a1c20] hover:bg-[#24262b] text-gray-200 
            px-4 py-3 rounded-full transition-colors duration-200 shadow-sm"
          >
            <Plus size={20} className="text-gray-300" />
            <span className="text-sm font-medium">New chat</span>
          </button>
        </div>

        {/* Recent Chats */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <div className="text-xs font-medium text-gray-400 px-3 mb-2">Recent</div>

          <div className="flex flex-col gap-1">
            {recentChats.map((chat, idx) => (
              <button
                key={idx}
                className="flex items-center gap-3 px-3 py-2 
                text-sm text-gray-300 rounded-full 
                hover:bg-[#1c1f24] transition-colors text-left truncate group"
              >
                <MessageSquare
                  size={16}
                  className="text-gray-500 group-hover:text-gray-300 shrink-0"
                />
                <span className="truncate">{chat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-700 mt-auto space-y-1">
          <button
            className="w-full flex items-center gap-3 px-3 py-2 
            text-sm text-gray-300 rounded-lg hover:bg-[#1c1f24] transition-colors"
          >
            <Compass size={18} />
            <span>Explore</span>
          </button>

          <button
            className="w-full flex items-center gap-3 px-3 py-2 
            text-sm text-gray-300 rounded-lg hover:bg-[#1c1f24] transition-colors"
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <div className="pt-2 mt-2 border-t border-gray-700">
            <button
              className="w-full flex items-center gap-3 px-3 py-2 
              text-sm text-red-400 rounded-lg hover:bg-red-950 transition-colors"
            >
              <LogOut size={18} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
