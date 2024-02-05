// MainLayout.tsx
import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white lg:p-4 p-0">Main Layout Header</header>
      <main className="flex-1 md:p-4 p-0">{children}</main>
      <footer className="bg-gray-800 text-white p-4">Main Layout Footer</footer>
    </div>
  );
};

export default MainLayout;
