import React from "react";

const VideoTitle = ({ singleMovie }) => {
//   console.log(singleMovie);
  return (
    <div>
      <div>
        <h1>{singleMovie.original_title}</h1>
        <p>{singleMovie.overview}</p>
      </div>
    </div>
  );
};

export default VideoTitle;
