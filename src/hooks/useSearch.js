import React, { useEffect } from "react";
import { options } from "../utils/fetchApi";
import { useDispatch } from "react-redux";
import { addSearchMovies } from "../store/searchSlice";

const useSearch = (inputMovies) => {
  const dispatch = useDispatch();
  const getSearchMovies = async () => {
    const fetchData = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${inputMovies}&include_adult=false&language=en-US&page=1`,
      options
    );
    const jsonData = await fetchData.json();
    dispatch(addSearchMovies(jsonData));
  };
  useEffect(() => {
    getSearchMovies();
  }, [dispatch, inputMovies, options]);

  return getSearchMovies;
};

export default useSearch;
