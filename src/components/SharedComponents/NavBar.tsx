

import { useEffect, useState } from "react";
import { MdClose, MdLogin, MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

type Route = string;

const NavBar: React.FC = () => {
  const [dropDownState, setDropDownState] = useState<boolean>(
    localStorage.getItem("dropDownState") === "true"
  );

  const toggleDropDown = () => {
    const newState = !dropDownState;
    setDropDownState(newState);
    localStorage.setItem("dropDownState", newState.toString());
  };

  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const isActive = (route: Route): string => {
    return route === activeRoute ? "!text-custom-main" : "";
  };

  // page always show top value when route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="flex items-center border w-full fixed z-[99] dark:border-white dark:border-b dark:border-0 dark:py-4 shadow justify-between bg-custom-light dark:bg-custom-dark px-4 py-2 text-custom-white">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-custom-white transition-all duration-200 hover:scale-110">
        <Link to="/" className="flex items-center">
          <p className="pl-2 text-custom-gray500 dark:text-custom-white font-bold">
            UniTy{" "}
            <span className="font-Quicksand dark:font-playfair-display font-semibold text-custom-white bg-custom-main px-4 py-1 rounded-md">
              RelieF
            </span>
          </p>
        </Link>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        <Link to="/" className={`group nav-li-style-pc ${isActive("/")}`}>
          Home
          <span className="nav-li-span-style-pc"></span>
        </Link>
        <Link
          to="/relief-goods"
          className={`group nav-li-style-pc ${isActive("/relief-goods")}`}
        >
          All Relief Goods
          <span className="nav-li-span-style-pc"></span>
        </Link>
        <Link
          to="/dashboard"
          className={`group nav-li-style-pc ${isActive("/dashboard")}`}
        >
          Dashboard
          <span className="nav-li-span-style-pc"></span>
        </Link>

        <li className="nav-li-style-pc">
          <Link
            to="/login"
            className="relative overflow-hidden rounded-md bg-custom-main text-custom-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center"
          >
            <MdLogin />
            <span className="pl-2 font-bold tracking-wider">Login</span>
          </Link>
        </li>

        {/* <li className="nav-li-style-pc">
          <button className="relative overflow-hidden rounded-md bg-custom-red text-custom-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center">
            <MdLogout />
            <span className="pl-2 font-bold tracking-wider">Logout</span>
          </button>
        </li> */}

        <ThemeToggle />
      </ul>
      <div
        onClick={toggleDropDown}
        className="relative flex transition-transform md:hidden"
      >
        {dropDownState ? (
          <MdClose
            size={24}
            className="cursor-pointer text-custom-dark dark:text-custom-white"
          />
        ) : (
          <MdMenu
            size={24}
            className="cursor-pointer text-custom-dark dark:text-custom-white"
          />
        )}

        {dropDownState && (
          <ul className="gap-2 bg-custom-light dark:bg-custom-dark absolute -right-2 top-16  dark:border-white border flex w-[250px] flex-col rounded text-base">
            <Link to="/" className={`nav-li-style-mobile ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/relief-goods"
              className={`nav-li-style-mobile ${isActive("/relief-goods")}`}
            >
              All Relief Goods
            </Link>
            <Link to="/dashboard" className={`nav-li-style-mobile ${isActive("/dashboard")}`}>
              Dashboard
            </Link>

            <li className="nav-li-style-mobile hover:bg-transparent">
              <Link
                to="/login"
                onClick={(e) => e.stopPropagation()}
                className="relative overflow-hidden rounded-md bg-custom-root text-custom-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center"
              >
                <MdLogin />
                <span className="pl-2 font-bold tracking-wider">Login</span>
              </Link>
            </li>

            <li className="nav-li-style-mobile hover:bg-transparent">
              {/* <button
                onClick={(e) => e.stopPropagation()}
                className="relative overflow-hidden rounded-md bg-custom-red text-custom-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center"
              >
                <MdLogout />
                <span className="pl-2 font-bold tracking-wider ">Logout</span>
              </button> */}
              <div className="my-4" onClick={(e) => e.stopPropagation()}>
                <ThemeToggle />
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
