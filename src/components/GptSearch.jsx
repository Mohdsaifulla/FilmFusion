import React, { useState } from "react";
import lang from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import useSearch from "../hooks/useSearch";
import { addSearchItem } from "../store/searchSlice";
import SearchedMovies from "./SearchedMovies";

const GptSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const inputMovie = useSelector((store) => store.searchMovies.searchItem);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addSearchItem(inputValue));
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  useSearch(inputMovie);
  //bgImage
  const langKey = useSelector((store) => store.changeLang.lang);
  return (
    <div className=" bg-gradient-to-b from-red-300 to-red-700 absolute top-0 -z-10 w-full">
      <div className="flex justify-center mt-20 ">
        <form className="bg-black p-4 rounded" onSubmit={handleForm}>
          <input
            placeholder={lang[langKey].searchPlaceholder}
            className="px-1 md:w-[500px] h-10 rounded"
            value={inputValue}
            onChange={handleInput}
          />
          <button className="px-2 bg-red-500 rounded mx-1 h-10">
            {lang[langKey].search}
          </button>
        </form>
      </div>
      <SearchedMovies />
    </div>
  );
};

export default GptSearch;
