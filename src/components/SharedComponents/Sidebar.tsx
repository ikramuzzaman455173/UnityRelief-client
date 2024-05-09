import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-semibold my-5">Sidebar</h1>
        <ul>
          <li className="mb-3">
            <Link
              to=""
              className="block py-2 px-4 rounded hover:bg-custom-gray500 dark:hover:bg-custom-gray text-custom-gray500 dark:text-custom-gray-300 font-bold tracking-wider font-Quicksand dark:font-source-code-pro hover:text-custom-white hover:border hover:border-custom-main"
            >
              Home
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to=""
              className="block py-2 px-4 rounded hover:bg-custom-gray500 dark:hover:bg-custom-gray text-custom-gray500 dark:text-custom-gray-300 font-bold tracking-wider font-Quicksand dark:font-source-code-pro hover:text-custom-white hover:border hover:border-custom-main"
            >
              About
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to=""
              className="block py-2 px-4 rounded hover:bg-custom-gray500 dark:hover:bg-custom-gray text-custom-gray500 dark:text-custom-gray-300 font-bold tracking-wider font-Quicksand dark:font-source-code-pro hover:text-custom-white hover:border hover:border-custom-main"
            >
              Services
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to=""
              className="block py-2 px-4 rounded hover:bg-custom-gray500 dark:hover:bg-custom-gray text-custom-gray500 dark:text-custom-gray-300 font-bold tracking-wider font-Quicksand dark:font-source-code-pro hover:text-custom-white hover:border hover:border-custom-main"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
