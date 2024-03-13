import React from 'react'
import HireCard from './HireCard'
import { LiaHeadsetSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { TbCoins } from "react-icons/tb";

const WhyHire = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[48px] bg-blue-50 py-5'>
        <h1 className='font-medium text-3xl lg:text-4xl'>Why Hire From Eskalate?</h1>
        <div className='p-5 gap-[48px] flex flex-wrap items-center justify-center'>
            <HireCard icon={<LiaHeadsetSolid />} title={'Continous Support'} data={'Regular check-ins post-hiring to gather feedback and ensure mutual satisfaction.'}/>
            <HireCard icon={<GoShieldCheck/>} title={'Risk-Free Hiring'} data={'Start building with a no-risk 2 week trial period.'}/>
            <HireCard icon={<TbCoins/>} title={'Cost-Effective Solution'} data={'Affordable software development options without compromising quality.'}/>
        </div>
    </div>
  )
}

export default WhyHire