import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";

export default function CoreValues() {
  return (
    <div className="bg-[#002F70] min-h-screen w-full pb-32">
      <div className="max-w-[1920px] w-[90vw] mx-auto flex flex-col">
        <div className="flex">
          <div className="text-[46px] font-bold text-[#B9B9B9] w-full md:w-[50%] border border-[#E2E2E21A] h-full pt-32 pb-10">
            Core
            <span className="text-white"> Values</span>
          </div>
          <div className="w-[50%] border border-[#E2E2E21A] h-[238.6px] hidden md:block"></div>
        </div>

        <div className="flex md:flex-row flex-col border border-[#E2E2E21A] ">
          <div className="w-full md:w-[50%] border-r border-[#E2E2E21A] h-full p-10 flex flex-col gap-4">
            <div className="w-[70px] h-[70px] border border-[#4794FF] bg-[#1e4b8b] rounded-full grid place-items-center">
              <RiTeamFill size={30} color="white" />
            </div>
            <div className="text-[24px] text-white font-bold">Committed</div>
            <div className="text-[18px] text-white">
              At Arc Constructions, we walk the talk. We don't just build; we
              invest. By developing properties ourselves, we pour our heart and
              soul into delivering on time and within budget. It's a personal
              commitment, etched in every brick and beam.
            </div>
          </div>
          <div className="w-full md:w-[50%] h-full p-10 flex flex-col gap-4">
            <div className="w-[70px] h-[70px] border border-[#4794FF] bg-[#1e4b8b] rounded-full grid place-items-center">
              <FaLightbulb size={30} color="white" />
            </div>
            <div className="text-[24px] text-white font-bold">Inspired</div>
            <div className="text-[18px] text-white">
              We don't see empty lots, we see possibilities. We're not just
              builders, we're architects of transformation. We breathe new life
              into assets, shape communities, and unlock real value in places
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col border border-[#E2E2E21A] ">
          <div className="w-full md:w-[50%] border-r border-[#E2E2E21A] h-full p-10 flex flex-col gap-4">
            <div className="w-[70px] h-[70px] border border-[#4794FF] bg-[#1e4b8b] rounded-full grid place-items-center">
              <FaPeopleGroup size={30} color="white" />
            </div>
            <div className="text-[24px] text-white font-bold">
              People Centric
            </div>
            <div className="text-[18px] text-white">
              We build more than homes; we build the foundation for thriving
              families. It's not just about walls, it's about fostering
              communities where comfort and spirit flourish.
            </div>
          </div>
          <div className="w-full md:w-[50%] h-full p-10 flex flex-col gap-4">
            <div className="w-[70px] h-[70px] border border-[#4794FF] bg-[#1e4b8b] rounded-full grid place-items-center">
              <IoTimerSharp size={30} color="white" />
            </div>
            <div className="text-[24px] text-white font-bold">Efficient</div>
            <div className="text-[18px] text-white">
              Functionality isn't a burden, it's our artistic signature. We
              craft spaces with visual integrity, maximising every square foot
              without sacrificing aesthetics.
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col border border-[#E2E2E21A] ">
          <div className="w-full md:w-[50%] border-r border-[#E2E2E21A] h-full px-10 pt-10 py-32 flex flex-col gap-4">
            <div className="w-[70px] h-[70px] border border-[#4794FF] bg-[#1e4b8b] rounded-full grid place-items-center">
              <HiOutlineCubeTransparent size={30} color="white" />
            </div>
            <div className="text-[24px] text-white font-bold">Transparent</div>
            <div className="text-[18px] text-white">
              Honesty isn't a tagline, it's our way of life. From clear
              communication to open processes, we believe in building trust,
              brick by transparent brick. Client testimonials speak louder than
              words, budgets are demystified, and progress unfolds openly.
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col border border-[#E2E2E21A]">
          <div className="w-full md:w-[50%] bg-[#FFFFFF] rounded-br-[40px] border border-[#E2E2E21A] h-full px-10 py-16 flex flex-col gap-4">
            <input
              type="text"
              className="h-[70px] border border-[#E7E7E7] text-black placeholder-gray-400 focus:outline-none focus:border-[#002F70] px-4"
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              className="h-[70px] border border-[#E7E7E7] text-black placeholder-gray-400 focus:outline-none focus:border-[#002F70] px-4"
              placeholder="Email"
              name="email"
            />
            <input
              type="number"
              className="h-[70px] border border-[#E7E7E7] text-black placeholder-gray-400 focus:outline-none focus:border-[#002F70] px-4"
              placeholder="Phone"
              name="phone"
            />
            <textarea
              rows={5}
              type="text"
              className="border py-4 border-[#E7E7E7] text-black placeholder-gray-400 focus:outline-none focus:border-[#002F70] px-4"
              placeholder="Message"
              name="message"
            />

            <button className="custom-button !rounded-none !bg-[#002F70] !text-white">
              Submit
            </button>
          </div>

          <div className="w-full md:w-[50%] mt-auto h-full px-10 pt-10 pb-10 flex flex-col gap-4">
            <div className="text-[24px] text-white font-thin">Contact us</div>
            <div className="text-[46px] text-white font-bold">
              Let’s get in touch
            </div>
            <div className="text-[18px] text-white font-thin">
              Fill in the form to know more about our services, our team will
              reach out to you soon!
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="min-w-[250px] bg-white h-[70px] flex">
                <div className="w-[66px] h-[66px] mt-auto bg-[#002F70] grid place-items-center">
                  <FiPhoneCall color="white" size={30} />
                </div>
                <div className="px-2 sm:px-6 flex flex-col justify-center">
                  <div className="text-[14px] sm:text-[18px] text-[#002F70] font-bold">
                    Calling Support
                  </div>
                  <div className="text-[12px] sm:text-[16px] text-[#002F70] font-thin">
                    (+62)81 235 26512
                  </div>
                </div>
              </div>

              <div className="min-w-[250px] bg-white h-[70px] flex">
                <div className="w-[66px] h-[66px] mt-auto bg-[#002F70] grid place-items-center">
                  <FiPhoneCall color="white" size={30} />
                </div>
                <div className="px-2 sm:px-6 flex flex-col justify-center">
                  <div className="text-[14px] sm:text-[18px] text-[#002F70] font-bold">
                    Email Information
                  </div>
                  <div className="text-[12px] sm:text-[16px] text-[#002F70] font-thin">
                    support@arcconstruction.com
                  </div>
                </div>
              </div>

              <div className="min-w-[250px] bg-white h-[70px] flex">
                <div className="w-[66px] h-[66px] mt-auto bg-[#002F70] grid place-items-center">
                  <FiPhoneCall color="white" size={30} />
                </div>
                <div className="px-2 sm:px-6 flex flex-col justify-center">
                  <div className="text-[14px] sm:text-[18px] text-[#002F70] font-bold">
                    Office Location
                  </div>
                  <div className="text-[12px] sm:text-[16px] text-[#002F70] font-thin">
                    Indiranagar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
