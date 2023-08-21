import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`text-orange-500 p-3 items-center ${
        theme === "dark" ? "dark:text-yellow-400" : ""
      }`}
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;
