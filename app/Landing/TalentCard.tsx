'use client';
import React, { useState } from "react";
import { IoMdWifi } from "react-icons/io";
import { TbBriefcase2 } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";

interface Props{
  img: string;
}
const TalentCard = ({img}:Props) => {
  const [hoverActive, setHoverActive] = useState<boolean>(true);
  
    const handleHoverAndClick = () => {
      setHoverActive(!hoverActive);
    };
  return (
    <div className= {`col-span-1 grid grid-cols-auto gap-2 h-[230px] w-[90vw] md:w-[380px] bg-white  rounded-xl overflow-clip p-2  ${
      hoverActive ?  "border-none":"border border-blue-400 transform scale-105 transition-all duration-500 ease-in-out" 
    }`}
  onMouseEnter={handleHoverAndClick}
  onMouseLeave={handleHoverAndClick}>
      <div className="grid grid-cols-3 gap-1">
        <div className="flex col-span-2 gap-3">
          <div className="w-[65px] h-[65px] flex rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={img}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-start gap-1">
            <p className="text-[18px] font-medium text-gray-600">Full Name</p>
            <div className="flex gap-1 text-gray-600">
              <FaCode className="text-[18px]" />
              <p className="text-[12px] font-medium">Web Developer</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <TbBriefcase2 className="text-[18px] " />
              <p className="text-[12px] font-medium">6 Years of Experiance</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start ">
          <p>Country</p>
        </div>
      </div>
      <div className="flex justify-start text-gray-600 text-[12px] pt-5">
        <p>
          Regular check-ins post-hiring to gather feedback and ensure mutual
          satisfaction.Regular check-ins post-hiring to gather feedback and
          ensure mutual satisfaction.
        </p>
      </div>
      <div className="flex justify-start items-start flex-wrap border-t border-gray-400 py-1">
        <div className="mx-1 my-1 px-3 py-[1px] text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] rounded-full border border-blue-400">
          React
        </div>
        <div className="mx-1 my-1 px-3 py-[1px] text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] rounded-full border border-blue-400">
          React
        </div>
        <div className="mx-1 my-1 px-3 py-[1px] text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] rounded-full border border-blue-400">
          React
        </div>
        <div className="mx-1 my-1 px-3 py-[1px] text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] rounded-full border border-blue-400">
          React
        </div>
        <div className="mx-1 my-1 px-3 py-[1px] text-[7px] sm:text-[7px] md:text-[7px] lg:text-[10px] rounded-full border border-blue-400">
          React
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
