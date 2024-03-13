import React from 'react'

const Menu = () => {
  return (
    <div className='grid grid-row-3 gap-1 w-full h-[200px] text-slate-500 bg-white bg-opacity-90'>
        <div className='p-5 w-full text-md border-b font-semibold'>
            <p>Home</p>
        </div>
        <div className='p-5 w-full text-md border-b font-semibold'>
            <p>Discover Talent</p>
        </div>
        <div className='p-5 w-full text-md font-semibold'>
            <p>About Us</p>
        </div>
    </div>
  )
}

export default Menu