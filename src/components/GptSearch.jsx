import React from "react";
import lang from "../utils/language";

const GptSearch = () => {
  return (
    <div className="">
      <div className="bgImage h-screen absolute top-0 -z-10 w-full"></div>
      <div className="flex justify-center mt-20 ">
        <form className="bg-black p-4 rounded">
          <input
            placeholder={lang.hindi.searchPlaceholder}
            className="px-1 md:w-[500px] h-10 rounded"
          />
          <button className="px-2 bg-red-500 rounded mx-1 h-10">
            {lang.hindi.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
