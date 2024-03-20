import React from "react";
import Hire from "./Hire";
import TextandDots from "./TextandDots";
import HiringProcessCard from "./HiringProcessCard";

const HiringProcess = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 gap-[0px]">
      <h1 className="font-medium text-3xl lg:text-4xl">
        Hiring Process
      </h1>
      
      <div className="hidden xl:block h-[700px] w-full overflow-hidden relative z-10">
          <div className="absolute top-[100px] left-[200px]">
            <div className='w-[400px] text-gray-600  '>
              <p className='text-sm'>Schedule a call with our team to kickstart your journey in hiring highly trained and vetted top African talent for your projects, all at a competitive cost.</p>
              <button className='py-[10px] px-[20px] mt-[31px] rounded-[5px] text-lg font-medium bg-[#2195F3] text-white'>Book a Call</button>
            </div>
          </div>
        <img src="/HireWave01.png" alt="" className="w-auto object-cover"/>
        <img src="/RightEllipse.png" alt="" className="w-[10%] absolute right-[-60px] top-0 z-0"/>
        <img src="/LeftEllipse.png" alt="" className="w-[20%] absolute left-[-200px] bottom-[120px] z-0"/>
        <div className="absolute top-[530px] left-[300px] right-[300px]">
          <TextandDots title = "Initial Consultation" discription = "Schedule a brief call with our team to discuss your project needs, team dynamics, and specific skills required."/>
        </div>
        <div className="absolute top-[380px] left-[650px]">
          <TextandDots title = "Talent Matching" discription = "Based on your requirements, we’ll curate a list of pre-vetted candidates that match your project’s needs."/>
        </div>
        <div className="absolute top-[400px] right-[200px]">
          <TextandDots title = "Risk-Free Hiring" discription = "You’ll have the opportunity to interview selected candidates and assess their fit for your project."/>
        </div>
        <div className="absolute top-[260px] right-[30px]">
          <TextandDots title = "Initial Screening" discription = "Benefit from a 2-week free trial period to assess candidate fit."/>
        </div>
      </div>
      <div className="xl:hidden">
        <HiringProcessCard/>
      </div>
    </div>
  );
};

export default HiringProcess;
