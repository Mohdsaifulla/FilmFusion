import React from "react";
import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const toggle = useSelector((store) => store?.search);
  console.log(toggle.toggleSearch);
  usePlayingMovies();
  usePopularMovies();
  useTopRated();

  return (
    <div>
      <Header />
      {toggle.toggleSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <div className="bg-black">
            <SecondaryContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
