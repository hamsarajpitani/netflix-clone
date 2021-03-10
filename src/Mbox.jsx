/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const Mbox = ({ title, fetchURL, isLarge }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [Movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //YOUTUBE TRAILER
  const opts = {
    height: "390",
    width: "1100",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //it gives full url
          // Example - https://www.youtube.com/watch?v=4dKkcRtZ9ho
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); //gives v=
        })
        .catch((err) => {
          console.log(err.message);
        }); //case some time name is undefiend
    }
  };

  /////////////////////////////
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "...." : string;
  }

  useEffect(() => {
    const getdata = async () => {
      await axios.get(fetchURL).then(({ data }) => {
        setMovie(data.results);
      });
      return;
    };

    getdata();
    console.log("MOVIE IS", Movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchURL]);

  return (
    <div id="movie">
      <div className="movie__title mt-5">
        <h1>{title}</h1>
      </div>

      <div className="movie__posters__div my-4">
        {Movie.map((movie) => {
          return (
            // //!! fix deadlink in case any image icon instead of actual image
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <div id="relative">
                <img
                  id="img"
                  onClick={() => handleclick(movie)}
                  className={`movie__poster__img
               ${isLarge && "movie__poster__img__large"}`}
                  key={movie.id}
                  src={`${baseUrl}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />

                <div className="hover__info">
                  <h1 className="name">{movie.name || movie.title}</h1>
                  <p className="overview">{truncate(movie.overview, 60)}</p>
                  <p className="vote">{movie.vote_average}</p>
                </div>
              </div>
            )
          );
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Mbox;
