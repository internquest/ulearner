/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegBell, FaCog } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import HomeIcon from "@/app/assets/Home.svg";
import CompanyIcon from "@/app/assets/Companies.svg";
import EventsIcon from "@/app/assets/Events.svg";
import JobIcon from "@/app/assets/Jobs.svg";
import { usePathname } from "next/navigation";

function SideNavbar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Home",
      icon: HomeIcon,
      link: "/",
    },
    {
      title: "Courses",
      icon: JobIcon,
      link: "/courses",
    },
    {
      title: "Projects",
      icon: EventsIcon,
      link: "/projects/videos",
      link2: "/projects/playlists",
    },
    {
      title: "Notes",
      icon: CompanyIcon,
      link: "/notes",
    },
    {
      title: "Reviews",
      icon: CompanyIcon,
      link: "/reviews",
    },
  ];

  return (
    <nav>
      <button className="group peer absolute left-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <GiHamburgerMenu
          className="block h-6 w-6 lg:hidden"
          aria-hidden="true"
        />
      </button>

      <div className="peer:transition fixed -left-96 top-0 z-20 h-screen w-72 bg-white shadow-lg delay-150 duration-200 ease-out peer-focus:left-0 lg:left-0 lg:w-72">
        <div className="item-center flex flex-col justify-start">
          <div className="flex flex-row px-6 pt-5">
            <div className="text-md w-full cursor-pointer border-b border-gray-100 pb-4 text-left font-semibold">
              {/* Your logo here */}
              <img
                className="w-24"
                src="https://images.jumpstart.me/frontend/brand/brand-logo-combined.svg"
                alt="logo"
              />
            </div>
            <div className="flex">
              <FaCog className="text-md mr-1 hidden text-gray-400 lg:flex" />
              <FaRegBell className="text-md ml-1 hidden text-gray-400 lg:flex" />
            </div>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col pb-20 pr-5 pt-3">
          <div className="space-y-3 text-[#0e0e0e]">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                passHref
                className={`relative flex min-h-10 min-w-64 items-center px-6 py-1 font-semibold ${
                  pathname === item.link || pathname === item.link2
                    ? 'mr-3 rounded-e-md bg-[#FFF9FA] after:absolute after:left-0 after:top-0 after:block after:h-full after:w-1 after:rounded-md after:bg-black after:content-[""]'
                    : ""
                }`}
              >
                <div className="mr-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-sm font-normal leading-[130%]">
                  {item.title}
                </span>
              </Link>
            ))}
            <div
              href="/"
              className="hidden min-h-10 min-w-64 items-center px-6 font-semibold active:bg-[#FFF9FA] lg:flex"
            >
              <img
                src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
                className="mr-4 h-6 w-6 rounded-full"
                alt=""
              />
              <span className="text-sm font-normal leading-[130%]">
                Aditya Pandey
              </span>
            </div>
            <div className="px-6 pb-3 pt-8 text-xs font-normal capitalize leading-[150%] tracking-widest">
              <h3>DIRECT MESSAGES</h3>
            </div>
            <div className="relative mx-6 hidden lg:flex">
              <input
                type="text"
                placeholder="Search"
                className="text-md text-md w-full rounded-3xl border border-gray-100 bg-[#FAFAFA] px-11 py-2 font-normal focus:border-gray-800 focus:outline-none active:border-gray-800"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
                <RiSearchLine className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNavbar;
