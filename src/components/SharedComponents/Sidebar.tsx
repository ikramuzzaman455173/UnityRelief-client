import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  type Route = string;
  const isActive = (route: Route): string => {
    return route === activeRoute ? "!text-custom-main " : "";
  };

  // page always show top value when route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-semibold my-5 text-center border rounded-md p-2 text-custom-main bg-custom-light shadow-md dark:bg-custom-blackOne border-custom-gray-300 darK:border-white">
          Admin
        </h1>
        <ul>
          <li className="mb-3">
            <Link
              to=""
              className={`sidebar-link-style ${isActive(
                "/dashboard/supplies"
              )}`}
            >
              supplies
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/dashboard/create-supply"
              className={`sidebar-link-style ${isActive(
                "/dashboard/create-supply"
              )}`}
            >
              Create Supply
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
