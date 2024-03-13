import React from 'react'
import { BiBriefcase } from "react-icons/bi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaNetworkWired } from "react-icons/fa";
import { RiSpeakLine } from "react-icons/ri";
const WhyScreen = () => {
  return (
    <div className='flex flex-col gap-[40px]  items-center mt-10 lg:mt-32 w-full bg-blue-50 py-[80px]'>
        <h1 className=' text-center font-medium text-xl lg:text-4xl'>Why are the best African developers at Eskalate?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-10 my-2 h-full justify-between px-0 md:px-[30px] lg:px-[264px]'>
            <div className='felx flex-col'>
                <div className='flex items-center justify-center p-5 gap-4'>
                    <div className="flex items-center justify-center h-[40px] w-[70px] border border-[#2195F3] rounded-md">
                        <LiaChalkboardTeacherSolid className="text-[#2195F3] text-[25px]" />
                    </div>
                    <div>
                        <p className='text-[16px] lg:text-[20px] text-[#2195F3] font-bold'>Rigorous Training</p>
                        <p className='text-14 lg:text-[16px] font-normal'>Out Talents are equipped with robust talent in data structure and Algorithms</p>
                    </div>
                </div>
                <div className='flex items-center p-5 gap-4'>
                    <div className="flex items-center justify-center h-[40px] w-[70px] border border-[#2195F3] rounded-md  text-[#2195F3]">
                        <FaNetworkWired className="text-[25px]" />
                    </div>
                    <div>
                    <p className='text-[16px] lg:text-[20px] text-[#2195F3] font-bold'>Problem-solving Expertise</p>
                        <p className='text-14 lg:text-[16px] font-normal'>Our Coding Academy cultivates a problem solving mindset, empowering talents to tackle challenges.</p>
                    </div>
                </div>
                <div className='flex items-center p-5 gap-4'>
                    <div className="flex items-center justify-center h-[40px] w-[70px] border border-[#2195F3] rounded-md">
                        <RiSpeakLine className="text-[#2195F3] text-[25px]" />
                    </div>
                    <div>
                    <p className='text-[16px] lg:text-[20px] text-[#2195F3] font-bold'>Strong Communication</p>
                        <p className='text-14 lg:text-[16px] font-normal'>Our talents excel in both technical skills and communication for effective collaboration.</p>
                    </div>
                </div>
                <div className='flex items-center p-5 gap-4'>
                    <div className="flex items-center justify-center h-[40px] w-[70px] border border-[#2195F3] rounded-md">
                        <BiBriefcase className="text-[#2195F3] text-[25px]" />
                    </div>
                    <div>
                    <p className='text-[16px] lg:text-[20px] text-[#2195F3] font-bold'>Hands-on Experience</p>
                        <p className='text-14 lg:text-[16px] font-normal'>Talents undergo a one-year project phase, applying theoretical knowledge to real-world applications.</p>
                    </div>
                </div>
            
        </div>
            <div className='p-2 hidden md:flex flex-col justify-center '>
                <img src="/developer 1.png" alt="coding_person" className='w-[500px]' />
            </div>
    </div>
    </div>
    
  )
}

export default WhyScreen