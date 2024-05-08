// DashboardLayout.tsx
import React, { ReactNode, useState } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <header className="bg-gray-800 text-custom-white p-4">
        Dashboard Layout Header
      </header>
      <div className="flex">
        {/* Sidebar */}
        <nav
          className={`bg-gray-200 p-4 text-xl font-medium ${
            showSidebar ? "block" : "hidden"
          } md:block max-w-[450px] h-screen`}
        >
          Dashboard Sidebar
        </nav>

        {/* Main Content */}
        <main className="bg-gray-100 flex-1 p-4 min-h-screen">{children}</main>

        {/* Button to toggle sidebar on medium screens */}
        <button
          className="md:hidden fixed top-4 right-4 bg-gray-800 text-custom-white p-2 rounded"
          onClick={toggleSidebar}
        >
          {showSidebar ? "Hide" : "Show"} Sidebar
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
