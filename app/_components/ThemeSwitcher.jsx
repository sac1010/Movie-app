"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import light from "@/public/light.svg";
import dark from "@/public/dark.svg";
import Image from "next/image";

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
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-black text-white dark:text-black dark:bg-white `}
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
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
