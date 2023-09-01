"use client"
import "./globals.css";
import { Inter } from "next/font/google";
// import { switchThemeDuration } from "./constants";
import { ThemeProvider } from "./_components/theme-provider";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import Navbar from "./_components/Navbar";

import { useState } from "react";
import { SearchContext } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wookie Movies",
  description: "Your next movie",
};

export default function RootLayout({ children }) {
  const [search, setSearch] = useState("")
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SearchContext.Provider value={[search, setSearch]}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="bg-white dark:bg-gray-800">{children}</main>
          </ThemeProvider>
        </SearchContext.Provider>
      </body>
    </html>
  );
}
