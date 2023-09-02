import React, { useContext, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SearchContext } from "../context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useContext(SearchContext);
  const [val, setVal] = useState("");
  const handleSearch = () => {
    if (val.trim() === "") {
      return;
    }
    setSearch(val);
    router.push("/");
  };

  return (
    <div className="w-full h-[5rem] bg-white dark:bg-black shadow-xl border-b border-gray-500 flex justify-around items-center">
      <Link
        href={"/"}
        className="text-black dark:text-white font-extrabold text-xl hidden md:block"
      >
        Wookie Movies
      </Link>
      <div className="flex gap-6">
        <input
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setSearch("");
            }
            setVal(e.target.value);
          }}
          type="text"
          className="px-2 border border-black"
          placeholder="Search"
        />
        <button
          onClick={handleSearch}
          className="p-2 rounded-md border border-black dark:border-white"
        >
          search
        </button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
