import React from "react";
import Hire from "./Hire";
import individualHiringCard from "./individualHiringCard";
import IndividualHireCard from "./IndividualHireCard";


const HiringProcessCard = () => {
  return (
    <div className=" grid grid-rows-2 gap-5 w-full justify-start items-center p-5">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-start">
        <IndividualHireCard num = '1'/>
        <IndividualHireCard num = '2'/>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-start">
        <IndividualHireCard num = '3'/>
        <IndividualHireCard num = '4'/>
      </div>
    </div>
  );
};

export default HiringProcessCard;
