import React from 'react';
import TechCardStack from './TechCardStack';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { SiFlutter, SiTypescript } from 'react-icons/si';

const TechCard = () => {
  const techItems1 = [
    { icon: <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4x" />, text: 'React' },
    { icon: <FaNodeJs className="text-blue-600 text-4xl" />, text: 'Node.js' },
    { icon: <FontAwesomeIcon icon={faHtml5} className="text-red-500 text-4x" />, text: 'HTML5' },
    { icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-4x" />, text: 'CSS3' },
  ];

  const techItems2 = [
    { icon: <SiFlutter className="text-blue-400 text-4xl" />, text: 'Flutter' },
    { icon: <SiTypescript className="text-blue-400 text-4xl" />, text: 'TypeScript' },
  ];

  return (
    <div className='relative'>
      <div className='w-[500px] h-[400px] text-xs rounded-lg shadow-md bg-gray-100 flex flex-col overflow-y-hidden overflow-x-hidden relative z-10'>
        <TechCardStack techStack={techItems1} />
        <TechCardStack techStack={techItems2} />
      </div>
      <img src="/hprizontal dots.png" alt="" className='w-[60%] absolute bottom-[-70px] right-[150px] z-0' />
    </div>
  );
};

export default TechCard;
