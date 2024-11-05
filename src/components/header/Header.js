import Logo from "@/assets/svgs/Logo";
import React from "react";

export default function Header() {
  return (
    <div className="h-[127px] w-full absolute top-16 z-[100]">
      <div
        className="bg-white max-w-[1920px] w-[90vw] mx-auto h-full rounded-[24px] px-10 flex items-center justify-between"
        style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
      >
        <Logo />

        <div className="hidden gap-10 items-center text-[18px] text-[#333333] md:flex">
          <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            Our Story
          </div>
          <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            Projects
          </div>
          <button className="custom-button">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
