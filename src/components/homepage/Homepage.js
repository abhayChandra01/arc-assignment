import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Header from "../header/Header";

export default function Homepage() {
  return (
    <div className="relative h-screen homepage-background pt-[250px]">
      <Header />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002F704D] via-[#002F704D] to-transparent" />

      <div className="relative max-w-[1920px] w-[90vw] h-full mx-auto flex flex-col gap-10 z-10">
        <div className="mt-[100px] md:mt-0 text-white text-[40px] md:text-[48px] xl:text-[88px] font-bold leading-[50px] md:leading-[80px] xl:leading-[120.21px]">
          A gateway to <br /> your future!
        </div>
        <button className="custom-button max-w-[236px] flex items-center gap-2">
          Know More
          <GoArrowUpRight size={26} />
        </button>
      </div>
    </div>
  );
}
