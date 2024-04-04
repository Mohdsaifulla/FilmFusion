import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const idNowPlaying = movies[0];

  return (
    <div>
      <VideoTitle singleMovie={idNowPlaying} />
      <VideoBackground movieId={idNowPlaying.id} />
    </div>
  );
};

export default MainContainer;
