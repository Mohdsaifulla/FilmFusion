import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../utils/fetchApi";

const Browse = () => {
  const getPlayingMovie = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await fetchData.json();
    console.log(data.results);
  };

  useEffect(() => {
    getPlayingMovie();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
