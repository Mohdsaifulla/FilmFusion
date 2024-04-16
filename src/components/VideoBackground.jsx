import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { IMAGE_URL } from "../utils/constants";

const VideoBackground = ({ movieId, singleMovie }) => {
  const videoTrailer = useSelector(
    (store) => store.movies?.videoBackgroundTrailer
  );
  // console.log(singleMovie);
  useMovieTrailer(movieId);
  return (
    <>
      <div className="absolute top-0 sm:-top-20 left-0  -z-10 w-full h-full">
        <iframe
          className="w-screen hidden sm:flex aspect-video"
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
      <div className="relative -top-28 -z-10">
        <img
          src={`${IMAGE_URL}${singleMovie.poster_path}`}
          className="flex sm:hidden w-full  h-full object-cover opacity-90"
        />
      </div>
    </>
  );
};

export default VideoBackground;
