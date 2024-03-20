import React from 'react'

const SecondScreen = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 my-2 h-full justify-between px-0 xl:px-[170px]'>
        <div className='p-2 sm:ml-10 flex flex-col justify-center items-start'>
            <div className='mb-10'>
                <p className=' my-5 text-center lg:text-left  font-medium text-3xl lg:text-4xl text-gray-700'>Hire Talented Developers</p>
                <p className='text-center lg:text-left text-gray-600 text-[18px] mt-5 font-normal"'>
                Elevate your tech workforce with our array of remote developers boasting diverse expertise and exceptional technical prowess, coupled with effective communication abilities, all offered at competitive rates.
                </p>
            </div>
            <div className='flex mt-[50px] w-full justify-center items-center'>
                <div className='flex justify-center lg:flex-row w-full'>
                    <input type="text" placeholder='Your work email' className="border p-2 h-[50px] w-[60%] lg:w-[50%] border-slate-400 
                 placeholder-text-xs rounded-[6px] placeholder-gray-400"  />
                    <button className=' ml-[-10px] h-[50px] w-[40%] lg:w-[30%] rounded-e-md  bg-[#2195F3] text-white'>Hire Top Talent</button>
                </div>
            </div>
        
        </div>
        <div className='p-2'>
        <div className='hidden md:flex justify-start pl-10 h-[300px] w-[700px]  lg:h-[400px] lg:w-[800px] overflow-hidden'>
            <img src="/hire 1.png" alt="second image" className='w-[62%] h-[95%] object-cover' />
        </div>

        </div>
    </div>
  )
}

export default SecondScreen