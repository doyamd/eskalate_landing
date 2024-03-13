import React from 'react'
import { FaDotCircle } from "react-icons/fa";

interface Props{
  title: string;
  discription:string;
}

const TextandDots = ({title,discription}:Props) => {
  return (
    <div>
      <div className='w-[280px] text-gray-500  '>
          <p className='text-base font-semibold'>{title}</p>
          <p className='font-medium text-sm'>{discription}</p>
      </div>
    </div>
  )
}

export default TextandDots