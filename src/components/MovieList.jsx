import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="relative top-10 sm:-top-50 mx-8">
      <p className="text-white pt-2 pb-4 text-2xl font-bold">{title}</p>
      <div className="flex gap-2 overflow-x-scroll scrollBar">
        {data &&
          data.map((item) => (
            <div key={item.id} className="">
              <MovieCard image={item.poster_path} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
