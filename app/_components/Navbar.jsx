import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="w-full h-[5rem] bg-white dark:bg-black shadow-xl flex justify-around items-center">
      <div className="text-black dark:text-white font-extrabold text-xl">Wookie Movies</div>
      <div className="flex">
        <input type="text" className="px-2" placeholder="Search"/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default Navbar;
