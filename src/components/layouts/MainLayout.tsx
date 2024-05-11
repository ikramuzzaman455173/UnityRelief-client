// MainLayout.tsx
import React, { ReactNode } from "react";
import NavBar from "../SharedComponents/NavBar";
import Footer from "../SharedComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 md:p-4 p-0">{children}</main>
      <footer className="bg-custom-light text-custom-white p-4">
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
