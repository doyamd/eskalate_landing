import React from "react";

const MainScreen = () => {
  return (
    <div className="lg:mt-[80px] h-[600px]">
      <div className="absolute top-[-300px]  md:top-[-50px] left-0 z-0">
        <img src="/headingWave.svg" alt="" className="h-[700px]" />
      </div>
      <div className="z-10 relative grid grid-row-2 md:grid-cols-2 my-20  h-[400px] ">
        <div className="p-2 ml-7 flex flex-col justify-center items-center md:items-start">
          <div className="lg:ml-20">
            <p className="text-[#2195F3] text-[18px] lg:text-[36px] font-medium">
              Empowering buisnesses through African Top Talents
            </p>
            <p className="text-gray-600 text-[18px] mt-5 font-normal">
              Empower your tech teams with our diverse, higlly skilled remote
              developers, providing strong technical and communication skills at
              compititive rate.
            </p>
          </div>
        </div>
        <div className="flex justify-start h-[300px] sm:h-[400px] lg:h-[600px] w-full overflow-hidden items-end">
          <img
            src="/LandingAnimation.svg"
            alt="second image"
            className=" h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
