"use client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../UseLocalStorage";
import MovieCard from "../_components/MovieCard";

const Page = () => {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(bookmarks);
    console.log(bookmarks);
  }, []);
  return (
    <div className="mx-auto px-10 2xl:w-[60%] lg:w-[80%] sm:w-[90%] w-full pt-10 min-h-screen">
      {data.length > 0 ? (
        <div className="grid grid-cols-12 gap-6 md:gap-12 gap-y-20 md:gap-y-20">
          {data.map((movie) => {
            return <MovieCard key={movie.slug} {...movie} />;
          })}
        </div>
      ) : (
        <div className="w-full  flex items-center justify-center text-xl font-bold">Watchlist Empty!</div>
      )}
    </div>
  );
};

export default Page;
