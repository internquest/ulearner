/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegBell, FaCog } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import HomeIcon from '@/app/assets/Home.svg';
import CompanyIcon from '@/app/assets/Companies.svg';
import EventsIcon from '@/app/assets/Events.svg';
import JobIcon from '@/app/assets/Jobs.svg';

function SideNavbar() {
    const [selectedItem, setSelectedItem] = useState('Home');

    const menuItems = [
        {
            title: 'Home',
            icon: HomeIcon,
            link: '/jobs',
        },
        {
            title: 'Jobs',
            icon: JobIcon,
            link: '/jobs',
        },
        {
            title: 'Events',
            icon: EventsIcon,
            link: '/jobs/events',
        },
        {
            title: 'Companies',
            icon: CompanyIcon,
            link: '/companies',
        },
    ];

    const handleItemClick = (itemTitle) => {
        setSelectedItem(itemTitle); // Update selected item
    };

    return (
        <nav >
            <button className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                    className="block lg:hidden h-6 w-6"
                    aria-hidden="true"
                />
            </button>


            <div className="w-72 h-screen bg-white shadow-lg z-20 fixed top-0 -left-96 lg:left-0 lg:w-72 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-start item-center">
                    <div className="px-6 pt-5 flex flex-row">
                        <div className="font-semibold text-left cursor-pointer text-md border-b border-gray-100 pb-4 w-full">
                            {/* Your logo here */}
                            <img className="w-24" src="https://images.jumpstart.me/frontend/brand/brand-logo-combined.svg" alt="logo" />
                        </div>
                        <div className="flex">
                            <FaCog className="text-md text-gray-400 mr-1 hidden lg:flex" />
                            <FaRegBell className="text-md text-gray-400 ml-1 hidden lg:flex" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 pt-3 pr-5 pb-20 h-full">
                    <div className="space-y-3 text-[#0e0e0e]">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.link} passHref onClick={() => handleItemClick(item.title)}
                                className={`relative flex items-center py-1 px-6 min-w-64 min-h-10 font-semibold ${selectedItem === item.title ? 'bg-[#FFF9FA] mr-3 rounded-e-md after:block after:content-[""] after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-black after:rounded-md' : ''
                                    }`}>
                                <div className="mr-4">
                                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                                </div>
                                <span className="text-sm font-normal leading-[130%]">{item.title}</span>

                            </Link>
                        ))}
                        <div href='/' className="hidden lg:flex items-center px-6 min-w-64 min-h-10 font-semibold active:bg-[#FFF9FA]">
                            <img src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg" className="rounded-full w-6 h-6 mr-4" alt="" />
                            <span className="text-sm font-normal leading-[130%]">Aditya Pandey</span>
                        </div>
                        <div className="text-xs capitalize tracking-widest font-normal leading-[150%] pt-8 px-6 pb-3">
                            <h3>DIRECT MESSAGES</h3>
                        </div>
                        <div className="relative mx-6 hidden lg:flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-11 py-2 border border-gray-100 rounded-3xl bg-[#FAFAFA] text-md font-normal active:border-gray-800 focus:border-gray-800 focus:outline-none text-md"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-lg ">
                                <RiSearchLine className="text-gray-400 " />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default SideNavbar;
