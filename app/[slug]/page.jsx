"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState();
  const params = useParams();

  const { slug } = params;

  const getMovie = async () => {
    var config = {
      method: "get",
      url: `https://wookie.codesubmit.io/movies/${slug}`,
      headers: {
        Authorization: "Bearer Wookie2019",
      },
    };

    const movieData = await axios(config);
    console.log(movieData.data);
    setData(movieData.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {data && (
        <div className="mx-auto px-10 2xl:w-[60%] lg:w-[80%] sm:w-[90%] w-full pt-10 min-h-screen">
          <div className="relative w-full h-[30rem]">
            {data && (
              <Image layout="fill" src={data.backdrop} objectFit="cover" />
            )}
          </div>
          <div className="font-bold text-2xl my-4">{`${data.title} `}</div>
          <div className="py-2"> {`(rating : ${data.imdb_rating}/10)`}</div>
          <div>{data.overview}</div>
          <div className="py-4">{`Cast: ${data.cast.join(", ")}`}</div>
        </div>
      )}
    </>
  );
};

export default Movie;
