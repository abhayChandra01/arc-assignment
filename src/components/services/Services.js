import React from "react";
import briefcase from "@/assets/services/briefcase.png";
import factory from "@/assets/services/factory.png";
import forest from "@/assets/services/forest.png";
import housingArea from "@/assets/services/housing-area.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const servicesData = [
  {
    id: 1,
    image: forest,
    title: "Land Banking",
  },
  {
    id: 2,
    image: factory,
    title: "Industrial Parks",
  },
  {
    id: 3,
    image: briefcase,
    title: "Business Parks",
  },
  {
    id: 4,
    image: housingArea,
    title: "Residential Spaces",
  },
];

export default function Services() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full py-10">
      <div className="max-w-[1920px] w-[90vw] mx-auto flex flex-col">
        <div className="text-[46px] font-bold text-[#002F70]">Our Services</div>

        <div className="max-w-[1000px] my-4">
          Arc Constructions offers a helping hand to businesses and individuals
          alike, turning visions into thriving spaces.
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button className="custom-button !rounded-[100px] !h-[55px] !bg-[#333333] !text-white hover:!bg-white hover:!text-[#333333]">
            Residential
          </button>
          <button className="custom-button !rounded-[100px] !h-[55px]">
            Construction
          </button>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-10 justify-between my-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="h-[220px] border border-[#E2E2E2] w-full bg-white rounded-br-[40px] flex items-center justify-center flex-col gap-2"
            >
              <Image src={service.image} alt={service.title} />
              <div className="text-[22px] font-semibold text-[#002F70] text-center">
                {service.title}
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="custom-button max-w-[236px] !rounded-none !rounded-br-[16px]">
            Know More
            <GoArrowUpRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
