import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoBackground } from "../store/movieSlice";
import { options } from "../utils/fetchApi";

const useMovieTrailer = (movieId) => {
  const videoBackgroundPresent=useSelector((store)=>store.movies.videoBackgroundTrailer)
  const dispatch = useDispatch();
  const getBackgroundVideoApi = async () => {
    const apiData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await apiData.json();
    const filterData = jsonData?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addVideoBackground(trailer));
  };
  useEffect(() => {
   !videoBackgroundPresent&& getBackgroundVideoApi();
  }, []);
};
export default useMovieTrailer;
