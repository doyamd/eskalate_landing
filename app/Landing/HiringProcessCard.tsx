import React from "react";
import Hire from "./Hire";
import IndividualHireCard from "./IndividualHireCard";


const HiringProcessCard = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className=" grid grid-rows-2 gap-5 w-full justify-start items-center p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-start ">
          <IndividualHireCard num = '1' title = "Initial Consultation" description = "Schedule a brief call with our team to discuss your project needs, team dynamics, and specific skills required."/>
          <IndividualHireCard num = '2' title = "Talent Matching" description = "Based on your requirements, we’ll curate a list of pre-vetted candidates that match your project’s needs."/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-start">
          <IndividualHireCard num = '3' title = "Risk-Free Hiring" description = "You’ll have the opportunity to interview selected candidates and assess their fit for your project."/>
          <IndividualHireCard num = '4' title = "Initial Screening" description = "Benefit from a 2-week free trial period to assess candidate fit."/>
        </div>
      </div>
      <button className='py-[10px] px-[20px] mt-[31px] rounded-[5px] text-lg font-medium bg-[#2195F3] text-white'>Book a Call</button>
    </div>
  );
};

export default HiringProcessCard;
