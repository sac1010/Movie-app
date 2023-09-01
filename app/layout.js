import "./globals.css";
import { Inter } from "next/font/google";
// import { switchThemeDuration } from "./constants";
import { ThemeProvider } from "./_components/theme-provider";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wookie Movies",
  description:
    "Your next movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
