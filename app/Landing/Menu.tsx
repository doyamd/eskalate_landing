'use-client';
import React, { useRef, useState } from 'react'
import Link from 'next/link'
const Menu = () => {
  const [loginDropdownActive, setLoginDropdownActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoginDropdownActive(false);
    }
};

  const toggleLoginDropdown = () => {
    setLoginDropdownActive(!loginDropdownActive);
};
  return (
    <div className='grid grid-row-4 gap-1 w-full h-[300px] text-slate-500 bg-white bg-opacity-90'>
        <div className='p-5 w-full text-md border-b font-semibold'>
            <Link href=""><p>Home</p></Link>
        </div>
        <div className='p-5 w-full text-md border-b font-semibold'>
          <Link href=""><p>Discover Talent</p></Link>
        </div>
        <div className='p-5 w-full text-md border-b font-semibold'>
          <Link href=""><p>About Us</p></Link>
        </div>
        <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] border border-[#2195F3] text-[#2195F3]' onClick={toggleLoginDropdown}>Login</button>
          {loginDropdownActive && (
              <div ref={dropdownRef} className='absolute top-full mt-2 right-0 w-[300px] bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg'>
                  <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Create Account</Link>
                  <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Freelancer</Link>
                  <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Developer</Link>
              </div>
          )}
    </div>
  )
}

export default Menu