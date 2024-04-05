import React from "react";

const VideoTitle = ({ singleMovie }) => {
  //   console.log(singleMovie);
  return (
    <div className="w-screen aspect-video text-white">
      <div className="">
        <h1>{singleMovie.original_title}</h1>
        <p>{singleMovie.overview}</p>
        <button className="bg-white rounded-lg text-black w-20 ">info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
