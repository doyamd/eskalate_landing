import React from 'react'

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
              <span className='mr-2 w-[50px] h-[40px] no-scrollbar overflow-hidden'>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
         
      </div>
  )
}

export default TechCardStack