import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const NowPlaying = useSelector((store) => store.movies);
  console.log(NowPlaying.nowPlayingMovies);
  return (
    <div>
      <MovieList
        title={"Now Playing Movies"}
        data={NowPlaying.nowPlayingMovies}
      />
        <MovieList
        title={"Now Playing Movies"}
        data={NowPlaying.nowPlayingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
