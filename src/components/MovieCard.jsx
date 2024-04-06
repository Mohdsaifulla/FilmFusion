import React from "react";

const MovieCard = ({ image }) => {
  return (
    <div className="w-48 rounded overflow-hidden">
      <img src={`https://image.tmdb.org/t/p/w200/${image}`} />
    </div>
  );
};

export default MovieCard;
