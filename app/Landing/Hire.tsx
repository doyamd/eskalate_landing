import React from 'react'

interface Props{
  num:string;
}

const Hire = ({num}:Props) => {
  return (
    <div>
        <p className='text-[100px] font-bold text-gray-100'>{num}</p>
    </div>
  ) 
}

export default Hire