import React from 'react';
import TalentCard from './TalentCard';
import { FaArrowRight } from "react-icons/fa6";
const Talent = () => {
  return (
    <div className='flex flex-col justify-center gap-7 py-2 items-center bg-blue-50 '>
      <h1 className='font-medium text-3xl lg:text-4xl'>Our Skilled Developers</h1>
      <div className='grid grid-flow-col gap-6 overflow-x-scroll no-scrollbar w-full xl:w-auto p-5 px-10'>
        <TalentCard img={'/img01.jfif'} />
        <TalentCard img={'/img02.jfif'}/>
        <TalentCard img={'/img03.jfif'}/>
      </div>
      <div className='flex justify-end w-full px-20'>
        <div className='py-[10px] gap-2 px-[16px] flex items-center m-3 rounded-[8px] text-[18px] bg-[#2195F3] text-white'>
          <button >Discover Talents </button>
          <FaArrowRight/>
        </div>
      </div>
    </div>
  );
};

export default Talent;
