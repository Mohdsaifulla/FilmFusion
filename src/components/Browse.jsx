import React from "react";
import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";


const Browse = () => {
  usePlayingMovies();
  usePopularMovies()
  useTopRated()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
