import React from "react";
import { FaMobileAlt, FaDesktop,FaDatabase } from 'react-icons/fa';
import TechCard from "./TechCard";
const TechStacks = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-[48px]">
      <h1 className="text-md font-medium text-4xl">What We Provide</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 my-2 h-full justify-between w-full ">
        <div className="flex flex-col gap-5 justify-end items-center lg:items-end">
          <div className="flex gap-5 px-5 justify-center items-center bg-blue-50 rounded-2xl w-[95vw] lg:w-[550px]">
            <div className="flex items-center justify-center h-[30px] w-[45px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[65px] bg-[#2195F3] rounded-full">
              <FaDatabase className="text-white text-[80%] sm:text-[70%] md:text-[100%] lg:text-[150%]" />
            </div>  
            <div className="py-10 w-[100%]">
              <p className="font-bold text-black text-lg">Backend Developers</p>
              <p className="text-14 lg:text-[16px] font-normal">
                Our back-end team builds the behind-the-scenes functionality of
                your project, making sure they run smoothly and handle data
                efficiently.
              </p>
            </div>
          </div>
          <div className="flex gap-5 px-5 justify-start items-center bg-blue-50 rounded-2xl w-[95vw] lg:w-[550px]">
            <div className="flex items-center justify-center h-[30px] w-[45px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[65px] bg-[#2195F3] rounded-full">
              <FaMobileAlt className="text-white text-[80%] sm:text-[70%] md:text-[100%] lg:text-[150%]" />
            </div>
            <div className="py-10 w-[100%]">
              <p className="font-bold text-black text-lg">Mobile Developers</p>
              <p className="text-14 lg:text-[16px] font-normal">
              Our mobile team specializes in creating high-performance and user-friendly mobile applications, ensuring a seamless and engaging experience for users 
across various devices
              </p>
            </div>
          </div>
          <div className="flex gap-5 px-5 justify-start items-center bg-blue-50 rounded-2xl w-[95vw] lg:w-[550px]">
            <div className="flex items-center justify-center h-[30px] w-[45px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[65px] bg-[#2195F3] rounded-full">
              <FaDesktop className="text-white text-[80%] sm:text-[70%] md:text-[100%] lg:text-[150%]" />
            </div>
            <div className="py-10 w-[100%]">
              <p className="font-bold text-black text-lg">Frontend Developers</p>
              <p className="text-14 lg:text-[16px] font-normal">
              Our Front-end developer make your projects look good and work well, 
turning designs into user-friendly experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TechCard/>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
