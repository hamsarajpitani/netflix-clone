import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";
import requests from "../request";
import Mbox from "../Mbox";

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      {/* navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* movies Rows */}​{" "}
      <Mbox
        title="netflix orgionals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Mbox title="Trending Now" fetchURL={requests.fetchTrending} />
      <Mbox title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Mbox title="action movies" fetchURL={requests.fetchActionMovies} />
      <Mbox title="comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Mbox title="horror movies" fetchURL={requests.fetchHorrorMovies} />
      <Mbox title="documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
