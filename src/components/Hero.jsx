import React from "react";
import { heroImage } from "../assets/images";
export default function Hero() {
  return (
    <div
      className="relative max-sm:h-1/3 h-screen max-md:bg-initial bg-cover bg-center flex justify-center items-center -z-10"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute bg-[#FFF3E3] p-10  sm:max-w-lg max-w-xl flex flex-col items-start justify-center shadow-lg top-1/3 lg:top-1/4  lg:right-20 bg-opacity-90">
        <h2 className="text-sm font-semibold uppercase text-[#333333] tracking-[3px]">
          New Arrival
        </h2>
        <h1 className="mt-2 text-5xl font-bold text-[#B88E2F] leading-[60px]">
          Discover Our New Collection
        </h1>
        <p className="mt-4 text-md font-medium text-[#333333">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-8 px-20 py-5 bg-[#B88E2F] text-white font-semibold hover:bg-yellow-600">
          Buy Now
        </button>
      </div>
    </div>
  );
}
