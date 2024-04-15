import React from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";

const SearchedMovies = () => {
  const searchMovieList = useSelector(
    (store) => store?.searchMovies?.getSearchMovies
  );
  console.log(searchMovieList.results);
  return (
    <div>
      <div className="flex flex-wrap gap-4 rounded mx-2 mt-4 justify-center">
        {searchMovieList?.results?.map((item) => (
          <div key={item.id}>
            <div className="w-48">
              {item.poster_path ? (
                <img
                  src={`${IMAGE_URL}${item?.poster_path}`}
                  className="rounded w-full h-full"
                />
              ) : (
                <div className="border h-64 rounded flex justify-center items-center">
                  <div>Coming Soon!</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedMovies;
