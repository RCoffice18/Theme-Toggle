import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="bg-slate-200 font-poppinsBody duration-500 text-4xl p-10 rounded-lg shadow-md h-96 w-1/2 mx-auto dark:bg-slate-800">
      <ThemeSwitcher />
      Hello
      <Link to='/page'>Page</Link>
    </div>
  );
};

export default Content;
