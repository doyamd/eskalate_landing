import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { SiNextDotJs } from 'react-icons/SiNextDotJs';
import Marquee from "react-fast-marquee";
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { SiFlutter, SiTypescript } from 'react-icons/si';

interface TechItems {
    icon: JSX.Element;
    text:string;
  }

interface Props {
    techItems: TechItems[];
  }

const TechCardStack = ({techItems}:Props) => {
    
  return (
    <div className='flex '>
        {techItems.map((item, index) => (
          <div key={index} className='p-2 bg-white m-1 rounded-md'>
            <div className='flex items-center'>
              <span className='mr-2 w-[40px] h-[40px] no-scrollbar overflow-hidden'>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
         
      </div>
  )
}

export default TechCardStack