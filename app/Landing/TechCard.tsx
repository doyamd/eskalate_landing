import React from 'react';
import TechCardStack from './TechCardStack';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaCloud } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { SiFlutter, SiTypescript, SiReact, SiFirebase, SiAngularjs, SiPostgresql, SiDocker, SiKubernetes,  SiAew, SiGooglecloud } from 'react-icons/si';
import {SiNodedotjs} from 'react-icons/si'
import { SiPython, SiRuby, SiGo,SiRust, SiDart  } from 'react-icons/si';
import { SiCsharp, SiSwift, SiKotlin, SiScala,SiApple, SiDotnet,SiAndroid,SiVuedotjs } from 'react-icons/si';

const TechCard = () => {
  const techItems1 = [
    { icon: <FaReact className="text-blue-400 text-4xl" />, text: 'React' },
    { icon: <FaNodeJs className="text-blue-600 text-4xl" />, text: 'Node.js' },
    { icon: <FaHtml5 className="text-red-500 text-5xl" />, text: 'HTML5' },
    { icon: <FaCss3 className="text-blue-500 text-4xl" />, text: 'CSS3' },
    { icon: <SiAew className="text-yellow-600 text-4xl" />, text: 'AWS' },
    
  ];
  
  const techItems2 = [
    { icon: <SiFlutter className="text-blue-400 text-4xl" />, text: 'Flutter' },
    { icon: <SiKotlin className="text-blue-600 text-4xl" />, text: 'Kotlin' },  
    { icon: <SiTypescript className="text-blue-400 text-4xl" />, text: 'TypeScript' },
    { icon: <SiCsharp className="text-purple-600 text-4xl" />, text: 'C#' },
    { icon: <SiAngularjs className="text-red-600 text-4xl" />, text: 'AngularJS' },
    { icon: <SiFlutter className="text-blue-400 text-4xl" />, text: 'Flutter' },
  ];
  const techItems3 = [
    { icon: <SiPython className="text-yellow-500 text-4xl" />, text: 'Python' },
    { icon: <SiRuby className="text-red-700 text-4xl" />, text: 'Ruby' },
    { icon: <SiGo className="text-blue-500 text-4xl" />, text: 'Go' },
    { icon: <SiRust className="text-orange-700 text-4xl" />, text: 'Rust' },
    { icon: <SiDart className="text-blue-400 text-4xl" />, text: 'Dart' },
    { icon: <SiKubernetes className="text-blue-600 text-4xl" />, text: 'Kubernetes' },
    
  ];
  
  const techItems4 = [
    { icon: <SiSwift className="text-orange-500 text-4xl" />, text: 'Swift' },
    { icon: <SiNodedotjs className="text-blue-400 text-4xl" />, text: 'Node.js' },
    { icon: <FaCss3 className="text-blue-500 text-4xl" />, text: 'CSS3' },    
    { icon: <SiScala className="text-red-700 text-4xl" />, text: 'Scala' },
    { icon: <SiKubernetes className="text-blue-600 text-4xl" />, text: 'Kubernetes' },
  ];
  
  const techItems5=[
    { icon: <SiAndroid className="text-green-600 text-4xl" />, text: 'Android' },
    { icon: <SiApple className="text-gray-800 text-4xl" />, text: 'iOS' },
    { icon: <SiDotnet className="text-purple-600 text-4xl" />, text: '.NET' },
    { icon: <SiGooglecloud className="text-blue-600 text-3xl " />, text: 'Google Cloud' },
    { icon: <FaCloud className="text-blue-700 text-4xl" />, text: 'Azure' },
  ]
  const techItems6 = [
  { icon: <SiReact className="text-blue-400 text-4xl" />, text: 'React' },
    { icon: <SiFirebase className="text-yellow-600 text-4xl" />, text: 'Firebase' },
    { icon: <SiVuedotjs className="text-green-600 text-4xl" />, text: 'Vue.js' },
    { icon: <SiPostgresql className="text-blue-600 text-4xl" />, text: 'PostgreSQL' },
    { icon: <SiDocker className="text-blue-400 text-4xl" />, text: 'Docker' },
]


    const itemsArr = [techItems1,techItems2,techItems3, techItems4,techItems5,techItems6]
  return (
    <div className='relative'>
      <div className='w-[520px] h-[390px] items-center text-xs rounded-lg shadow-md bg-gray-100 flex flex-col overflow-y-hidden overflow-x-hidden relative z-10'>
      {itemsArr.map((item,index) => (
          <TechCardStack techItems={item} />
          ))}
          </div>
      <img src="/hprizontal dots.png" alt="" className='hidden xl:block w-[60%] absolute bottom-[-70px] right-[190px] z-0' />
    </div>
  );
};

export default TechCard;
