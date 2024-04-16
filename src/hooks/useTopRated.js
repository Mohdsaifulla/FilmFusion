import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { options } from "../utils/fetchApi";
const useTopRated = () => {
  const topRatedMoviesPresent = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await fetchData.json();

    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    !topRatedMoviesPresent && getTopRated();
  }, []);
};
export default useTopRated;
