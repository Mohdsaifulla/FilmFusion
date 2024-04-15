import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, singleMovie }) => {
  const videoTrailer = useSelector(
    (store) => store.movies?.videoBackgroundTrailer
  );
  useMovieTrailer(movieId);
  return (
    <div className="absolute -top-20 left-0  -z-10 w-full h-full">
      <iframe
        className="w-screen md:aspect-video aspect-[2/2]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        src={
          "https://www.youtube.com/embed/" +
          videoTrailer?.key +
          "?&autoplay=1&mute=1" +
          "&showinfo=0" +
          "&controls=0" +
          "&autohide=0"
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
