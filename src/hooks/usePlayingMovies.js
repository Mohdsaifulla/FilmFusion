import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { options } from "../utils/fetchApi";
const usePlayingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovie = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const data = await fetchData.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data.results);
  };

  useEffect(() => {
    getPlayingMovie();
  }, []);
};
export default usePlayingMovies;
