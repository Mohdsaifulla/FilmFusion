import React, { useEffect } from "react";
import { options } from "../utils/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { addVideoBackground } from "../store/movieSlice";

const VideoBackground = ({ movieId }) => {
  const videoTrailer = useSelector(
    (store) => store.movies?.videoBackgroundTrailer
  );
  const dispatch = useDispatch();
  const getBackgroundVideoApi = async () => {
    const apiData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await apiData.json();
    // console.log(jsonData);
    const filterData = jsonData.results.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addVideoBackground(trailer));
    // console.log(trailer);
    console.log(videoTrailer);
  };
  useEffect(() => {
    getBackgroundVideoApi();
  }, []);
  return (
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + videoTrailer?.key}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
