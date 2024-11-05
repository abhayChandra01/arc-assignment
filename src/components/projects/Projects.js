"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/assets/carousel/Picture_1.png";
import image2 from "@/assets/carousel/Picture_2.png";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const cardsData = [
  {
    id: 1,
    image_src: image1,
    description: "Myntra Warehouse on SK Road (2015)",
    area: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    id: 2,
    image_src: image2,
    description: "Myntra Warehouse on SK Road (2015)",
    area: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    id: 3,
    image_src: image1,
    description: "Myntra Warehouse on SK Road (2015)",
    area: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    id: 4,
    image_src: image2,
    description: "Myntra Warehouse on SK Road (2015)",
    area: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    id: 5,
    image_src: image1,
    description: "Myntra Warehouse on SK Road (2015)",
    area: "Leasable Area: 2 Lac Sq. Ft",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= cardsData.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? cardsData.length - 1 : newIndex;
    });
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full py-10">
      <div className="max-w-[1920px] w-[90vw] mx-auto flex flex-col">
        <div className="text-[46px] font-bold text-[#878B8D]">
          Completed <span className="text-[#002F70]">Projects</span>
        </div>

        <div className="max-w-[1000px] my-4">
          At Arc Constructions, we take pride in our diverse portfolio of
          successfully completed projects. Each venture showcases our commitment
          to quality, innovation, and client satisfaction. Explore our past
          projects to witness the excellence we bring to every development.
        </div>

        <div className="relative">
          <div className="h-[200px] sm:h-[340px] z-0" />

          <div className="flex overflow-hidden z-10 absolute top-0 left-0 right-0 ">
            <motion.div
              className="flex"
              style={{
                width: `${cardsData.length * 550}px`,
                transform: `translateX(-${currentIndex * 550}px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {cardsData.map((card) => (
                <div key={card.id}>
                  <div className="w-[300px] h-[120px] sm:w-[550px] sm:h-[300px] flex-shrink-0 rounded-lg mr-4 rounded-br-[40px] mb-10 sm:-mb-6">
                    <Image src={card?.image_src} />
                  </div>
                  <div className="text-[16px] text-[#333333] inline-flex items-center gap-4">
                    {card?.description}
                    <div className="w-[5px] h-[5px] rounded-full bg-[#333333]" />
                    {card?.area}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-between mt-4 z-10">
            <button className="custom-button max-w-[236px] !rounded-none !rounded-br-[16px]">
              View all property
              <GoArrowUpRight size={26} />
            </button>
            <div>
              <button
                onClick={prevSlide}
                className="custom-button !rounded-full !min-w-0 !w-[30px] sm:!w-[70px] !h-[30px] sm:!h-[70px] mr-2"
              >
                <IoIosArrowRoundBack size={30} />
              </button>
              <button
                onClick={nextSlide}
                className="custom-button !rounded-full !min-w-0 !w-[30px] sm:!w-[70px] !h-[30px] sm:!h-[70px]"
              >
                <IoIosArrowRoundForward size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
