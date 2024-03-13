// Components/Companies.tsx

import React from 'react';
import './Landing.css';
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 sm:px-10 md:px-36'>
      <h1 className='text-md text-center font-bold sm:text-lg md:text-[28px] lg:text-4xl'>Join Top-tech companies who Have Hired </h1>
      <h1 className='text-md text-center font-bold sm:text-lg md:text-[28px] lg:text-4xl'> Best African Developers</h1>
      <div className='text-[14px] lg:text-[16px] mt-3 flex flex-col justify-start w-[700px]'>
        <li>25+ candidates have been hired by industry giants like Google.</li>
        <li className='text-center'>25+ individuals have secured positions at prestigious firms including Bloomberg, Amazon, Databricks, Palantir, and LinkedIn.</li>
      </div>
        <Marquee speed={80}>
          <div className='slider h-[200px] w-[500px] flex items-end'><img src="/Amazon.png" alt="" className='w-[250px]' /></div>
          <div className='slider h-[200px] w-[500px] flex items-end'><img src="/bloomberg-ar21 1.png" alt="" className='w-[250px]' /></div>
          <div className='slider h-[200px] w-[500px] flex items-end'><img src="/databricks-seeklogo 1.png" alt="" className='w-[250px]' /></div>
          <div className='slider h-[200px] w-[500px] flex items-end'><img src="/Google.png" alt="" className='w-[250px]' /></div>
          <div className='slider h-[200px] w-[500px] flex items-end'><img src="/LinkedIn.png" alt="" className='w-[250px]' /></div>
        </Marquee>
    </div>
  );
}

export default Companies;
