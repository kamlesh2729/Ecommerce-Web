import React from "react";

import TrendingItems from "./TrendingItems";


const TrendingSlider = () => {

  return (
    <>
      <section className=" my-8 w-[90vw] mx-auto">
        <div className="flex items-center justify-between">
        <h3 className=" py-8 text-h3 font-semibold">Products That are Trending</h3>
        <div className=" text-h3 font-semibold flex gap-8">
          <button title="scroll-left">left</button>
          <button title="scroll-right">right</button>
        </div>
        </div>
        <div className=" h-[60vh] w-full flex overflow-x-scroll overflow-y-hidden relative scroll-smooth whitespace-nowrap gap-9 scrollbarh">
          <TrendingItems/>
        </div>
      </section>
    </>
  );
};

export default TrendingSlider;
