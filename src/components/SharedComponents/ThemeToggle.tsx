// import { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(() =>
//     localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="rounded-full p-2 bg-gray-300 dark:bg-red-800 text-gray-900 dark:text-gray-100 focus:outline-none"
//     >
//       {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
//     </button>
//   );
// };

// export default ThemeToggle;

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme === "light" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 bg-custom-dark text-white dark:bg-custom-white dark:text-custom-main focus:outline-none"
    >
      {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
};

export default ThemeToggle;
