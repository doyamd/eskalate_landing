import React from 'react'
import NavigationBar from './NavigationBar'
import MainScreen from './MainScreen'
import SecondScreen from './SecondScreen'
import WhyScreen from './WhyScreen'
import Talent from './Talent'
import WhyHire from './WhyHire'
import CallToAction from './CallToAction'
import Companies from './Companies'
import Footer from './Footer'
import TechStacks from './WhatWeProvide'
// import TalentCard from './TalentCard'
// import TechCard from './TechCard'
import HiringProcess from './HiringProcess'
import TextandDots from './TextandDots'
import HiringProcessCard from './HiringProcessCard'
const Landing = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <NavigationBar/>
        <MainScreen/>
        <SecondScreen/>
        <WhyScreen/>
        <TechStacks/>

        <WhyHire/>
        <HiringProcess/>
        <Talent/>
        {/* <TechCard/> */}
        <Companies/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Landing