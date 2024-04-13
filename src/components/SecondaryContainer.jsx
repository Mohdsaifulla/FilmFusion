import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const NowPlaying = useSelector((store) => store.movies);
  const Popular = useSelector((store) => store.movies);
  const TopRated = useSelector((store) => store.movies);

  return (
    <div className="bg-black bg-gradient-to-t from-black relative -top-60 h-[100%]">
      <MovieList
        title={"Now Playing Movies"}
        data={NowPlaying.nowPlayingMovies}
      />
      <MovieList title={"Popular"} data={Popular.popularMovies} />
      <MovieList title={"Top Rated"} data={TopRated.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
