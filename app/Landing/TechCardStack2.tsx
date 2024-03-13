import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const TechCardStack2 = () => {
    const techItems2 = [
        { icon: <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4x" />, text: 'React' },
        { icon: <FaNodeJs className="text-blue-600 text-4xl" />, text: 'Node.js' },
        { icon: <FontAwesomeIcon icon={faHtml5} className="text-red-500 text-4x" />, text: 'HTML5' },
        { icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-4x" />, text: 'CSS3' },
        { icon: <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4x" />, text: 'React' },
        { icon: <FaNodeJs className="text-blue-600 text-4xl" />, text: 'Node.js' },
    ];
    return (
    <div className='flex'>
        {techItems2.map((item, index) => (
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

export default TechCardStack2