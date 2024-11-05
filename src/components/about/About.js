import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import maskImg from "@/assets/Mask_group.png";
import maskImg1 from "@/assets/Mask_group_1.png";
import maskImg2 from "@/assets/Mask_group_2.png";
import maskImg3 from "@/assets/Mask_group_3.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen max-w-[1920px] w-[90vw] mx-auto flex flex-col md:flex-row justify-between py-10 my-4 gap-10 md:gap-0">
      <div className="w-full md:w-[50%] flex flex-col justify-center gap-10">
        <div className="text-[#002F70] text-[32px] font-thin">About us</div>

        <div className="text-[46px] leading-[56px] text-[#002F70] font-semibold">
          Building dreams,
          <br /> brick by brick, since the 1960s.
        </div>

        <div>
          Since the 1960s, we've been building in Bengaluru, starting with
          handmade bricks and tiles. Today, we construct everything from cosy
          homes to busy business centres using steel and glass. We're a
          dedicated and family-oriented team, using the latest tools while
          staying true to our roots.
        </div>

        <button className="custom-button max-w-[236px] !rounded-none !rounded-br-[16px]">
          Know More
          <GoArrowUpRight size={30} />
        </button>
      </div>
      <div className="w-full md:w-[50%] flex justify-center gap-4">
        <Image
          src={maskImg}
          className="w-[30px] h-[200px] md:h-[400px] xl:h-[520px] sm:w-[70px] xl:w-[120px]"
        />
        <Image
          src={maskImg1}
          className="w-[30px] h-[200px] md:h-[400px] xl:h-[520px] sm:w-[70px] xl:w-[120px] mt-auto"
        />
        <Image
          src={maskImg2}
          className="w-[30px] h-[200px] md:h-[400px] xl:h-[520px] sm:w-[70px] xl:w-[120px]"
        />
        <Image
          src={maskImg3}
          className="w-[30px] h-[200px] md:h-[400px] xl:h-[520px] sm:w-[70px] xl:w-[120px] mt-auto"
        />
      </div>
    </div>
  );
}
