// DashboardLayout.tsx
import React, { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">Dashboard Layout Header</header>
      <div className="flex">
        <nav className="bg-gray-200 max-w-[450px] h-screen p-4 text-xl font-medium">Dashboard Sidebar</nav>
        <main className="bg-gray-100 flex-1 p-4">{children}</main>
      </div>
      <footer className="bg-gray-800 text-white p-4">Dashboard Layout Footer</footer>
    </div>
  );
};

export default DashboardLayout;

