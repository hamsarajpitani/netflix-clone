import React, { useState, useEffect } from "react";
import axios from "./axios";
import img from "./images/portrait.jpg";

// `${baseUrl}${
//     isLarge ? movie.poster_path : movie.backdrop_path
//   }`

const Row = ({ title, fetchURL, isLarge }) => {
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
  }, [fetchURL]);

  return (
    <section className="mlist">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row my-5">
              <div className="col-11">
                <div id="list">
                  <div className="list__text">
                    <h1 className="list__text__title">
                      featured
                      <br />
                      <span>{title}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mx-auto">
                <div className="movies" id="container">
                  {Movie.map((movie) => {
                    return (
                      <div className="col-md-2 mv-card">
                        <div classname="card text-white bg-dark">
                          <img
                            className={`card-img-top card__poster ${
                              isLarge && "card__poster__large"
                            }`}
                            key={movie.id}
                            src={`${baseUrl}${
                              isLarge ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
