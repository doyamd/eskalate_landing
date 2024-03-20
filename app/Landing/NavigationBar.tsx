'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import Menu from './Menu';

const NavigationBar = () => {
    const [navBarActive, setNavBarActive] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [loginDropdownActive, setLoginDropdownActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const curY = window.scrollY;
            setNavBarActive(curY >= 100);
        });

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLoginDropdownActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const showMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleLoginDropdown = () => {
        setLoginDropdownActive(!loginDropdownActive);
    };

    return (
        <div className={`${menuActive ? "grid-row-2 h-auto" : "grid-row-1"}`}>
            <div className={`fixed top-0 left-0 w-full z-50 py- md:py-0 ${!navBarActive && menuActive ? "bg-slate-100/30 backdrop-blur-sm" : navBarActive && !menuActive ? "bg-slate-100/30 backdrop-blur-sm" : navBarActive && menuActive ? "bg-slate-100/30 backdrop-blur-sm" : "transparent "} grid grid-cols-2 lg:grid-cols-3 p-1  justify-evenly shadow-md`}>
                <div className='flex items-center justify-start lg:justify-center '><img src="/logo-blue 1.svg" alt="Logo" className='w-[80%] lg:w-[50%]' /></div>
                <div className={`list-none hidden lg:flex gap-10 justify-center font-semibold text-[18px] items-center text-gray-700`}>
                    <Link href=""><li className='p-2'>Home</li></Link>
                    <Link href=""><li className='p-2'>Discover Talent</li></Link>
                    <Link href=""><li className='p-2'>About Us</li></Link>
                </div>
                <div className='  hidden lg:flex lg:justify-end'>
                    <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] bg-[#2195F3] text-white'>Hire Top Talent</button>
                    <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] border border-[#2195F3] text-[#2195F3]' onClick={toggleLoginDropdown}>Login</button>
                    {loginDropdownActive && (
                        <div ref={dropdownRef} className='absolute top-full mt-2 right-0 w-[300px] bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg'>
                            <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Create Account</Link>
                            <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Freelancer</Link>
                            <Link href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Developer</Link>
                        </div>
                    )}
                </div>
                <div className='flex lg:hidden justify-end items-center'>
                    <CiMenuFries className='text-[30px] text-[#2195F3]' onClick={showMenu} />
                </div>
                <div className={`col-span-2 ${menuActive ? "block lg:hidden" : "hidden "} `}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
