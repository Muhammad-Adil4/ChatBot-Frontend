import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen font-sans text-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        onNewChat={() => console.log('New chat triggered')} 
      />

      <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden">
        <Outlet context={{ sidebarOpen, setSidebarOpen }} />
      </div>
    </div>
  );
};
