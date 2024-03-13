import React from 'react'

const SecondScreen = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-5  mt-[0px] lg:mt-[50px] h-[400px] justify-between'>
        <div className='p-2 ml-10 flex flex-col justify-center items-center md:items-start'>
            <div className='mb-10'>
                <p className='font-medium my-5 text-center text-[18px] md:text-[24px] lg:text-5xl text-gray-700'>Hire Talented Developers</p>
                <p className='text-center text-gray-600 text-[14px] lg:text-[18px] '>
                    Empower your tech teams with our diverse, higlly skilled remote developers,
                    providing strong technical and communication skills at compititive rate.
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
        <div className='hidden md:flex justify-start pl-20 h-[300px] w-[700px]  lg:h-[400px] lg:w-[800px] overflow-hidden'>
            <img src="/hire 1.png" alt="second image" className='w-[62%] h-[95%] object-cover' />
        </div>

        </div>
    </div>
  )
}

export default SecondScreen