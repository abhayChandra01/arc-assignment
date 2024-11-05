import FooterLogo from "@/assets/svgs/FooterLogo";
import React from "react";
import facebook from "@/assets/footer/Facebook.png";
import twitter from "@/assets/footer/X.png";
import linkedin from "@/assets/footer/LinkedIn.png";
import Image from "next/image";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#FFF] w-full py-10">
      <div className="max-w-[1920px] w-[90vw] mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <FooterLogo />

          <div className="flex items-center gap-10">
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
              Our Story
            </div>
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
              Projects
            </div>
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
              Contact
            </div>
          </div>

          <div className="h-[96px] rounded-lg flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-4 border border-[#000000]">
            Stay Connected
            <Image className="w-[50px] sm:w-[60px]" src={facebook} />
            <Image className="w-[50px] sm:w-[60px]" src={twitter} />
            <Image className="w-[50px] sm:w-[60px]" src={linkedin} />
          </div>
        </div>

        <div className="w-full h-[1px] bg-black my-10" />

        <div className="flex flex-col gap-4 sm:flex-row justify-between w-full">
          <div className="flex flex-col gap-2 sm:flex-row items-center sm:gap-4">
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer inline-flex items-center gap-2 border-b border-black pb-2">
              <IoMail />
              hello@arcconstructions.com
            </div>
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer inline-flex items-center gap-2 border-b border-black pb-2">
              <IoCall />
              +91 91813 23 2309
            </div>
            <div className="hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer inline-flex items-center gap-2 border-b border-black pb-2">
              <FaLocationDot />
              Location
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[14px]">
            © {new Date().getFullYear()} ARC Constrtuctions. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
