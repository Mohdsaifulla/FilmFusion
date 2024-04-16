import React from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import MovieList from "./MovieList";
import SecondaryContainer from "./SecondaryContainer";

const SearchedMovies = () => {
  const searchMovieList = useSelector(
    (store) => store?.searchMovies?.getSearchMovies
  );
  console.log(searchMovieList);
  return (
    <div>
      <div className="flex flex-wrap gap-4 rounded mx-2 mt-4 justify-center mb-96">
        {searchMovieList.total_results !== 0 ? (
          searchMovieList?.results?.map((item) => (
            <div key={item.id} className="">
              <div className="w-40 h-48  rounded">
                {item.poster_path ? (
                  <img
                    src={`${IMAGE_URL}${item?.poster_path}`}
                    className="rounded w-full h-full"
                  />
                ) : (
                  <div className="border h-48 rounded flex justify-center items-center">
                    <div>Coming Soon!</div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="h-screen text-4xl">Look Like movie not present🥲</div>
        )}
      </div>
    </div>
  );
};

export default SearchedMovies;
