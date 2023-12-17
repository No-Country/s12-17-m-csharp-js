"use client";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img key={s} src={s} alt="" />;
        })}
      </div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between overflow-hidden  text-3xl text-white">
        <button onClick={previousSlide} className="rounded-full bg-white ">
          <CiCircleChevLeft className="text-primary" />
        </button>
        <button onClick={nextSlide} className="rounded-full bg-white ">
          <CiCircleChevRight className="text-primary " />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`h-5 w-5 cursor-pointer rounded-full  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
