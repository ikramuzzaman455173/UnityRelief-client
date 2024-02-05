import { Outlet, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Outlet/></MainLayout>,
    errorElement: "404 error found!",
    children: [
      {
        path: "/",
        element: <h3>This is our home page</h3>,
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
        element:<h3>This is our dashboard page</h3>,
      },
    ],
  },
]);

export default router;
