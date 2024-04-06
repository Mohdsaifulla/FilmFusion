import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="relative -top-60 ">
      <p className="text-white">{title}</p>
      <div className="flex gap-2 overflow-x-scroll">
        {data&& data.map((item) => (
          <div key={item.id} className="">
            <MovieCard image={item.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
