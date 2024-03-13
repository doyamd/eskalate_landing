import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='relative h-[500px] flex md:justify-stretch lg:justify-center bg-blue-50 md:items-start lg:items-center overflow-hidden mt-10'>
      <div className='relative z-10 h-[60%] w-[70%] mx-2 md:mx-15 md:my-10 lg:m-20 px-2 grid md:grid-row-2 lg:grid-cols-2 gap-5 '>
            <div className='text-sm text-slate-500 flex-col justify-center md:justify-start my-5'>
              <img src="/logo-blue 1.svg" alt="" className='w-[80%]'/>
              <p className='my-3 text-[10px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>Made since 2019 in Ethiopia and USA by the Eskalate team</p>
              <div className='text-[#2195F3] flex my-10 text-[20px] justify-center'>
                <FaLinkedinIn className='mr-3'/>
                <FaXTwitter className='mr-3'/>
                <FaYoutube className='mr-3'/>
                <FaInstagram className='mr-3'/>
              </div>
            </div>
            <div className='h-full w-full  md:p-2 grid grid-cols-3 gap-16 items-start justify-start'>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5'>
                <p className='font-semibold text-lg mb-3'>Company</p>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">Home </Link></li>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">About Us</Link></li>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">Discover Talent</Link></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3'>Community</p>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">a2sv.org </Link></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3'>Contact Us</p>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">+251912345678 </Link></li>
                <li className='my-2 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[15px]'><Link href="/page">info@a2sv.org</Link></li>
              </div>
            </div>
        </div>
        <div className='absolute inset-0 z-0 hidden lg:block'>
          <img src="/footerfull.png" alt="footer_img" className='absolute left-0 top-[10px] w-[100%] h-full  opacity-50'/>
        </div>
 
    </div>
  )
}

export default Footer