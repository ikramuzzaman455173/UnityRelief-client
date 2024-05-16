
import { useState } from "react";
import Sidebar from "../SharedComponents/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../SharedComponents/ThemeToggle";
import { ToastContainer } from "react-toastify";
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = (e: React.MouseEvent | React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest("#sidebar") && !target.closest("#open-sidebar")) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* <div className="h-[100vh"> */}
        {/* Sidebar */}
        <div
          className={`fixed bg-custom-light dark:bg-custom-dark text-custom-gray500 border shadow-md dark:text-custom-white w-56 transition-transform top-[62px] h-full z-[50] dark:border-0 dark:border-white dark:border-r ${
            sidebarOpen ? "" : "transform -translate-x-full"
          } ease-in-out duration-300`}
          id="sidebar"
        >
          {/* Your Sidebar Content */}
          <Sidebar />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col" onClick={closeSidebar}>
          {/* Navbar */}
          <div className="bg-custom-light dark:bg-custom-dark dark:border-0 dark:border-white dark:border-b shadow border fixed w-full top-0 left-0 z-[99]">
            <div className="container mx-auto ">
              <div className="flex justify-between items-center py-4 px-2">
                <Link to="/" className="flex items-center">
                  <p className="pl-2 text-custom-gray500 dark:text-custom-white font-bold">
                    UniTy{" "}
                    <span className="font-Quicksand dark:font-playfair-display font-semibold text-custom-white bg-custom-main px-4 py-1 rounded-md">
                      RelieF
                    </span>
                  </p>
                </Link>

                <div
                  className="flex items-center gap-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ThemeToggle />

                  <button
                    className="text-custom-white dark:text-custom-gray500 bg-custom-dark dark:bg-custom-light p-2 rounded active:text-custom-main hover:text-custom-main"
                    id="open-sidebar"
                    onClick={toggleSidebar}
                  >
                    {sidebarOpen ? (
                      <FaTimes className="w-6 h-6" />
                    ) : (
                      <FaBars className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Content Body */}
          <div className="mt-28 ">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      {/* </div> */}
    </>
  );
};

export default DashboardLayout;


















// import { useState } from "react";
// import Sidebar from "../SharedComponents/Sidebar";
// import { Link, Outlet } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ThemeToggle from "../SharedComponents/ThemeToggle";
// import { ToastContainer } from "react-toastify";
// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = (e: React.MouseEvent | React.TouchEvent) => {
//     const target = e.target as HTMLElement;
//     if (!target.closest("#sidebar") && !target.closest("#open-sidebar")) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <>
//     <div className="">
//         {/* Sidebar */}
//         <div
//           className={`absolute bg-custom-light dark:bg-custom-dark text-custom-gray500 border shadow-md dark:text-custom-white w-56 min-h-screen overflow-y-auto transition-transform top-[62px] z-[50] dark:border-0 dark:border-white dark:border-r ${
//             sidebarOpen ? "" : "transform -translate-x-full"
//           } ease-in-out duration-300`}
//           id="sidebar"
//         >
//           {/* Your Sidebar Content */}
//           <Sidebar />
//         </div>

//         {/* Content */}
//         <div className="flex-1 flex flex-col" onClick={closeSidebar}>
//           {/* Navbar */}
//           {/* <div className="bg-custom-light dark:bg-custom-dark dark:border-0 dark:border-white dark:border-b shadow border fixed w-full top-0 left-0 z-[99]">
//             <div className="container mx-auto ">
//               <div className="flex justify-between items-center py-4 px-2">
//                 <Link to="/" className="flex items-center">
//                   <p className="pl-2 text-custom-gray500 dark:text-custom-white font-bold">
//                     UniTy{" "}
//                     <span className="font-Quicksand dark:font-playfair-display font-semibold text-custom-white bg-custom-main px-4 py-1 rounded-md">
//                       RelieF
//                     </span>
//                   </p>
//                 </Link>

//                 <div
//                   className="flex items-center gap-5"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <ThemeToggle />

//                   <button
//                     className="text-custom-white dark:text-custom-gray500 bg-custom-dark dark:bg-custom-light p-2 rounded active:text-custom-main hover:text-custom-main"
//                     id="open-sidebar"
//                     onClick={toggleSidebar}
//                   >
//                     {sidebarOpen ? (
//                       <FaTimes className="w-6 h-6" />
//                     ) : (
//                       <FaBars className="w-6 h-6" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           {/* Content Body */}
//           <div className="mt-32 mb-16 md:mx-0 mx-5">
//             <Outlet />
//           </div>
//         </div>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default DashboardLayout;
