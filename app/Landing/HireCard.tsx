"use client";
import React, { useState } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  data: string;
}

const HireCard = ({ icon, title, data }: Props) => {
  const [hoverActive, setHoverActive] = useState<boolean>(true);

  const handleHoverAndClick = () => {
    setHoverActive(!hoverActive);
  };

  return (
    <div
      id="hovered"
      className={`rounded-xl ${
        hoverActive
          ? "bg-white"
          : "bg-blue-50 border border-[#2195F3] transform scale-105 transition-all duration-300 ease-in-out"
      } h-[250px] w-[300px] md:h-[280px] md:w-[250px] xl:h-[280px] xl:w-[385px] p-7`}
      onMouseEnter={handleHoverAndClick}
      onMouseLeave={handleHoverAndClick}
    >
      <div className="w-full mb-5 flex justify-center lg:justify-start">
        <div
          className={`${
            hoverActive
              ? "text-[#2195F3] bg-blue-50 border border-[#2195F3]"
              : "text-white bg-[#2195F3]  border border-white"
          } text-[50px] lg:text-[60px] h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-md flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
      <div className="md:w-[220px] lg:h-full">
        <p className="text-[#2195F3] text-[18px] mt-5 font-normal mb-4 text-center lg:text-left">
          {title}
        </p>
        <p className="text-slate-700 text-14 lg:text-[16px] font-normal text-center lg:text-left">{data}</p>
      </div>
    </div>
  );
};

export default HireCard;
