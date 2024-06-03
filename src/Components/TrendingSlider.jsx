import React from "react";

import TrendingItems from "./TrendingItems";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";




const TrendingSlider = () => {

  const slideLeft = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft - 230;
  };

  const slideRight = () => {
    let Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft + 230;
  };

  return (
    <>
      <section className=" my-8 w-[90vw] mx-auto">
        <div className="flex items-center justify-between">
          <h3 className=" py-8 text-h3 font-semibold">
            Products That are Trending
          </h3>
          <div className=" text-h3 font-semibold flex gap-8">
            <button title="scroll-left" onClick={slideLeft}>
              <BsArrowLeftSquareFill/>
            </button>
            <button title="scroll-right" onClick={slideRight}>
            <BsArrowRightSquareFill/>
            </button>
          </div>
        </div>
        <div
          className=" h-[60vh] w-full flex overflow-x-scroll overflow-y-hidden relative scroll-smooth whitespace-nowrap gap-9 scrollbarh"
          id="slider"
        >
          <TrendingItems />
        </div>
      </section>
    </>
  );
};

export default TrendingSlider;
