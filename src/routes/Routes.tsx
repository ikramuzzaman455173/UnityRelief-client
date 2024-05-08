import { Outlet, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import Dashboard from "@/pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Outlet/></MainLayout>,
    errorElement: "404 error found!",
    children: [
      {
        path: "/",
        element: <HomePage/>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element:<Dashboard/>,
      },
    ],
  },
]);

export default router;
