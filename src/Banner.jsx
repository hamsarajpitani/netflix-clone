import React, { useEffect, useState } from "react";
import axios from "./axios"; //!! local AXIOS .js FILE
import request from "./request";


const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "...." : string;
  }

  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      await axios.get(request.fetchNetflixOriginals).then(({ data }) => {
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      });
    };
    getdata();
  }, []);

  // console.log(Movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        objectFit: "contain",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${Movie.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title banner__buttons">{Movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button btn">play</button>
          <button className="banner__button btn">my list</button>
        </div>

        <h1 className="banner__discription">{truncate(Movie.overview, 160)}</h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
};

export default Banner;
