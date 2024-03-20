import React from 'react'
import Hire from './Hire'

interface Props{
  num:string;
  title:string;
  description:string;
}

const IndividualHireCard = ({num,title,description}:Props) => {
  return (
    <div><div className="relative  flex gap-5 px-5 justify-start items-center border border-[#2195F3] rounded-2xl w-[90vw] md:h-[20vh]  md:w-[40vw]">
    <div className="py-10 z-10">
      <p className="font-bold text-black text-lgl">{title}</p>
      <p className="text-14 lg:text-[16px] font-normal text-slate-700">
        {description}
      </p>
    </div>
    <div className="absolute z-0 right-[30px]">
      <Hire num = {num} />
    </div>
  </div></div>
  )
}

export default IndividualHireCard