import React from 'react'
import Hire from './Hire'

interface Props{
  num:string;
}

const IndividualHireCard = ({num}:Props) => {
  return (
    <div><div className="relative  flex gap-5 px-5 justify-start items-center border border-[#2195F3] rounded-2xl w-full md:h-[200px] md:w-[200px]]">
    <div className="py-10 z-10">
      <p className="font-bold text-black text-lgl">Web Developers</p>
      <p className="text-sm text-slate-700">
        Out Talents are equipped with robust talent in data structure and
        Algorithms
      </p>
    </div>
    <div className="absolute z-0 right-[30px]">
      <Hire num = {num} />
    </div>
  </div></div>
  )
}

export default IndividualHireCard