import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { options } from "../utils/fetchApi";
const usePlayingMovies = () => {
  const nowPlayingMoviesPresent=useSelector((store)=>store.movies.nowPlayingMovies)
  const dispatch = useDispatch();
  const getPlayingMovie = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await fetchData.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMoviesPresent&&getPlayingMovie();
  }, []);
};
export default usePlayingMovies;
