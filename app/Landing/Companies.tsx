// Components/Companies.tsx

import React from 'react';
import './Landing.css';
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 px-2 sm:px-10 md:px-36'>
      <h1 className='text-center font-medium text-3xl lg:text-4xl'>Join Top-tech companies who Have Hired <br />Best African Developers </h1>
      <div className='text-14 lg:text-[16px] font-normal mt-3 flex flex-col justify-start w-[400px] sm:w-[700px] p-2'>
        <li className='text-center'>25+ candidates have been hired by industry giants like Google.</li>
        <li className='text-center'>25+ individuals have secured positions at prestigious firms including Bloomberg, Amazon, Databricks, Palantir, and LinkedIn.</li>
      </div>
        <Marquee speed={80}>
          <div className='h-[100px] sm:h-[200px] w-[200px] sm:w-[500px] flex items-end'><img src="/Amazon.png" alt="" className='w-[150px] sm:w-[250px]' /></div>
          <div className='h-[100px] sm:h-[200px] w-[200px] sm:w-[500px] flex items-end'><img src="/bloomberg-ar21 1.png" alt="" className='w-[150px] sm:w-[250px]' /></div>
          <div className='h-[100px] sm:h-[200px] w-[200px] sm:w-[500px] flex items-end'><img src="/databricks-seeklogo 1.png" alt="" className='w-[150px] sm:w-[250px]' /></div>
          <div className='h-[100px] sm:h-[200px] w-[200px] sm:w-[500px] flex items-end'><img src="/Google.png" alt="" className='w-[150px] sm:w-[250px]' /></div>
          <div className='h-[100px] sm:h-[200px] w-[200px] sm:w-[500px] flex items-end'><img src="/LinkedIn.png" alt="" className='w-[150px] sm:w-[250px]' /></div>
        </Marquee>
    </div>
  );
}

export default Companies;
