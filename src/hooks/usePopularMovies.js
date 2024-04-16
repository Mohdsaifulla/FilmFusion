import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";
import { options } from "../utils/fetchApi";
const usePopularMovies = () => {
  const polularMoviesPresent=useSelector((store)=>store.movies.popularMovies)
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const data = await fetchData.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
   !polularMoviesPresent&& getPopularMovies();
  }, []);
};
export default usePopularMovies;
