"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./_components/MovieCard";

export default function Home() {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    var config = {
      method: "get",
      url: "https://wookie.codesubmit.io/movies",
      headers: {
        Authorization: "Bearer Wookie2019",
      },
    };

    const movieData = await axios(config);
    console.log(movieData.data.movies)
    setData(movieData.data.movies);
    const genres = []

  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="md:mx-auto px-10 lg:w-[80%] w-full pt-10">
      <div className="flex gap-10 flex-wrap justify-around">
        {data.map((movie) => {
          return <MovieCard {...movie} />;
        })}
      </div>
    </div>
    
  );
}
