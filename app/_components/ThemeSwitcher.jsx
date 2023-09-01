"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import light from "@/public/light.svg";
import dark from "@/public/dark.svg";
import Image from "next/image";
import { createContext, useContext } from "react";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit p-1 bg-black rounded-md hover:scale-110 active:scale-100 duration-200 text-white dark:text-black  `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* <Image
        src="../../public/dark.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      {theme === "light" ? "🌙" : "🔆"}
    </button>
  );
};
