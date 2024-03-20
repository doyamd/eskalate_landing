import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='relative flex flex-col h-[400px] items-center justify-end px-10 md:px-36 bg-blue-50'>
      <div className='flex xl:flex-row flex-col border-b-4 border-slate-200 md:p-10 z-10'>
            <div className='text-sm text-slate-500 flex flex-col justify-center'>
              <img src="/logo-blue 1.svg" alt="" className='w-[300px] xl:w-[60%]'/>
              <p className='my-3 text-14 lg:text-[16px] font-normal inline-block'>Made since 2019 in Ethiopia and USA by the Eskalate team</p>
              <div className='text-[#2195F3]  text-[20px] flex justify-center lg:justify-start'>
                <FaLinkedinIn className='mr-3'/>
                <FaXTwitter className='mr-3'/>
                <FaYoutube className='mr-3'/>
                <FaInstagram className='mr-3'/>
              </div>
            </div>
            <div className='h-full w-full  grid grid-cols-3 gap-10 items-start justify-start'>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5'>
                <p className='font-semibold text-lg mb-3'>Company</p>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">Home </Link></li>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">About Us</Link></li>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">Discover Talent</Link></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3'>Community</p>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">a2sv.org </Link></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3'>Contact Us</p>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">+251912345678 </Link></li>
                <li className='my-2 text-14 lg:text-[16px] font-normal'><Link href="/page">info@a2sv.org</Link></li>
              </div>
            </div>
        </div>
        <div className='lg:flex justify-center items-center hidden h-[25%] w-full z-10'>
          <p>Copyright</p>
        </div>
        <div className='absolute inset-0 z-0 hidden lg:block'>
          <img src="/footerfull.png" alt="footer_img" className='absolute left-0 top-[10px] w-[100%] h-full  opacity-50'/>
        </div>
 
    </div>
  )
}

export default Footer