"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "./_components/MovieCard";
import { SearchContext } from "./context";

export default function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useContext(SearchContext);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    getMovies();
  }, [search]);

  const getMovies = async () => {
    var config = {
      method: "get",
      url: `https://wookie.codesubmit.io/movies?q=${search}`,
      headers: {
        Authorization: "Bearer Wookie2019",
      },
    };

    const movieData = await axios(config);
    console.log(movieData);
    if (search) {
      setSearchData(movieData.data.movies);
    } else {
      const genreData = formattedForGenre(movieData.data.movies);
      setData(genreData);
    }
  };

  const formattedForGenre = (movies) => {
    let obj = {};
    movies.forEach((movie) => {
      const genres = movie.genres;
      for (const genre of genres) {
        if (!obj[genre]) {
          obj[genre] = [movie];
        } else {
          obj[genre].push(movie);
        }
      }
    });
    return obj;
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="mx-auto px-10 2xl:w-[60%] lg:w-[80%] sm:w-[90%] w-full pt-10 min-h-screen">
        {data &&
          !search &&
          Object.entries(data).map(([genre, movies]) => {
            return (
              <div className="mt-16" key={genre}>
                <h1 className="my-4 text-3xl font-extrabold">{genre}</h1>
                <div className="grid grid-cols-12 gap-6 md:gap-12 gap-y-20 md:gap-y-20">
                  {movies.map((movie) => {
                    return <MovieCard key={movie.slug} {...movie} />;
                  })}
                </div>
              </div>
            );
          })}
      
      {searchData && search && (
        <div className="grid grid-cols-12 gap-6 md:gap-12 gap-y-20 md:gap-y-20">
          {searchData.map((movie) => {
            return <MovieCard key={movie.slug} {...movie} />;
          })}
        </div>
      )}
      </div>
    </>
  );
}
