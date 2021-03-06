import React, { useState, useEffect } from "react";
import axios from "./axios";

const Mbox = ({ title, fetchURL, isLarge }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      await axios.get(fetchURL).then(({ data }) => {
        setMovie(data.results);
      });
      return;
    };
    
    getdata();
    console.log(Movie);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchURL]);

  return (
    <div id="movie">
      <div className="movie__title mt-5">
        <h1>{title}</h1>
      </div>

      <div className="movie__posters my-4">
        {Movie.map((movie) => {
          return (
            //!! fix deadlink in case any image icon instead of actual image
            // (isLarge && movie.poster_path) ||
            // (!isLarge && movie.backdrop_path && (

            <img
              className={`card-img-top movie__poster ${
                isLarge && "movie__poster__large"
              }`}
              key={movie.id}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mbox;
