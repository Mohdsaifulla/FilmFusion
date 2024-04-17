import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({ singleMovie }) => {
  return (
    <div className="w-screen absolute  sm:relative sm:bottom-22 sm:aspect-video text-white ">
      <div className="px-16 md:w-[700px] h-full relative lg:top-30 md:top-10 top-8 md:text-xl">
        <h1 className="font-bold pb-4 lg:text-3xl sm:text-xl ">
          {singleMovie.original_title}
        </h1>
        <p className="text-sm  text-justify sm:hidden lg:flex">
          {singleMovie.overview}
        </p>
        <div className="flex gap-4 pt-2">
          <button className="bg-white rounded text-black  flex justify-center items-center gap-2 p-1">
            <FaPlayCircle />
            <span className="">Play</span>
          </button>
          <button className="bg-white rounded text-black  flex justify-center items-center gap-2 p-1">
            <FaInfoCircle className=""/>
            <span className="">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
