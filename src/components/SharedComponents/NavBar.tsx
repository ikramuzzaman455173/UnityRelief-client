import { toggleDropDown } from "@/redux/features/MenuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { MdLogin, MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const dropDownState = useAppSelector(
    (menuState) => menuState.menuState.dropDownState
  );
  console.log({ dropDownState });
  const dispatch = useAppDispatch();

  //* active route style add
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const isActive = (route: string): string => {
    return route === activeRoute ? "!text-indigo-300" : "";
  };

  return (
    <nav className="flex items-center sticky top-2 z-[100] justify-between bg-[#0f1d34] px-4 py-2 text-white m-2 rounded-md">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        {/* ====comment===== */}
        <div className="flex items-center">
          {/* <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 w-10 h-10 rounded-full shadow-md">
            <h3 className="text-white font-bold text-lg">UR</h3>
          </div> */}
          <p className="pl-2 ">
            UniTy{" "}
            <span className="font-Quicksand font-semibold bg-sky-500 px-4 rounded-md">
              RelieF
            </span>
          </p>
        </div>

        {/* ====comment===== */}
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        <li className={`group nav-li-style-pc ${isActive("/")}`}>
          Home
          <span className="nav-li-span-style-pc"></span>
        </li>
        <li className={`group nav-li-style-pc ${isActive("/relief-goods")}`}>
          All Relief Goods
          <span className="nav-li-span-style-pc"></span>
        </li>
        <li className={`group nav-li-style-pc ${isActive("/dashboard")}`}>
          Dashboard
          <span className="nav-li-span-style-pc"></span>
        </li>

        <li className="nav-li-style-pc">
          <button className="relative overflow-hidden rounded-md bg-indigo-500 text-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center">
            <MdLogin />
            <span className="pl-2 font-bold tracking-wider">Login</span>
          </button>
        </li>

        <li className="nav-li-style-pc">
          <button className="relative overflow-hidden rounded-md bg-rose-500 text-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center">
            <MdLogout />
            <span className="pl-2 font-bold tracking-wider">Logout</span>
          </button>
        </li>
      </ul>
      <div
        onClick={() => dispatch(toggleDropDown())}
        className="relative flex transition-transform md:hidden"
      >
        {dropDownState ? (
          <MdClose size={24} className="cursor-pointer" />
        ) : (
          <MdMenu size={24} className="cursor-pointer" />
        )}
        {dropDownState && (
          <ul className="z-10 gap-2 bg-[#0f1d34] absolute right-0 top-12 flex w-[200px] flex-col rounded text-base">
            <li className={`nav-li-style-mobile ${isActive("/")}`}>Home</li>
            <li className={`nav-li-style-mobile ${isActive("/relief-goods")}`}>
              All Relief Goods
            </li>
            <li className={`nav-li-style-mobile ${isActive("/dashboard")}`}>
              Dashboard
            </li>

            <li className="nav-li-style-mobile hover:bg-transparent">
              <button className="relative overflow-hidden rounded-md bg-indigo-500 text-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center">
                <MdLogin />
                <span className="pl-2 font-bold tracking-wider">Login</span>
              </button>
            </li>

            <li className="nav-li-style-mobile hover:bg-transparent">
              <button className="relative overflow-hidden rounded-md bg-rose-500 text-white py-2 px-5 transition duration-300 active:scale-105 transform flex items-center">
                <MdLogout />
                <span className="pl-2 font-bold tracking-wider ">Logout</span>
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
