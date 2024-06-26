import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Login from "@/components/SharedComponents/Login";
import Register from "@/components/SharedComponents/Register";
import AllReliefGoods from "@/pages/AllReliefGood/AllReliefGoods";
import AllReliefGoodDetails from "@/pages/AllReliefGood/AllReliefGoodDetails";
import CreateSupply from "@/pages/Dashboard/CreateSupply";
import AllSupplies from "@/pages/Dashboard/AllSupplies";
import UpdateSupply from "@/pages/Dashboard/UpdateSupply";
import ErrorPage from "@/components/SharedComponents/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "/relief-goods/:id",
        element: <AllReliefGoodDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "update-supply/:id",
        element: <UpdateSupply />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
    ],
  },
]);

export default router;
