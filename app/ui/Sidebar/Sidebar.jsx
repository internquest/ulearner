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
import { SchibstedGroteskmed } from "@/app/fonts/fonts";

function SideNavbar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Courses",
      icon: JobIcon,
      link: "/courses/videos",
      link2: "/courses/playlists",
    },
    {
      title: "Projects",
      icon: EventsIcon,
      link: "/projects/videos",
      link2: "/projects/playlists",
    },
    {
      title: "Interview Prep",
      icon: CompanyIcon,
      link: "/interview-prep/videos",
      link2: "/interview-prep/playlists",
    },
    // {
    //   title: "Coursera",
    //   icon: CompanyIcon,
    //   link: "/coursera/videos",
    //   link2: "/coursera/playlists",
    // },
  ];
  // console.log(pathname === '/courses');

  return (
    <nav className="[grid-area:2/1/3/2]  ">

      <div className="flex flex-col flex-grow h-full gap-4">
        <div className=" bg-white  rounded-[20px] min-h-[148px] w-full ">
          <p className={`${SchibstedGroteskmed.className} max-w-[187px] mx-auto font-normal text-[1rem] leading-[2] my-5`}>Empower yourself with
            new skills while making a
            difference.</p>
        </div>
        <div className=" bg-white rounded-[20px] flex-grow min-h-[514px] w-full px-5 py-6">
          <div className="flex flex-col gap-3 ">
            {
              menuItems.map((menu, index) => <Link key={index} href={menu.link} className={`${SchibstedGroteskmed.className} font-medium text-[1rem] leading-[2] tracking-tight ${pathname === menu.link || pathname === menu.link2 ? "bg-[#E1FF01]" : "bg-[#F8F8F8]"} h-[40px] transition-colors duration-200 w-[200px] py-1 px-5 rounded-[30px] `}>{menu.title}</Link>)
            }
            {/* <Link href='/courses' className={`${SchibstedGroteskmed.className} font-medium text-[1rem] leading-[2] tracking-tight bg-[#F8F8F8] h-[40px] w-[200px] py-1 px-5 rounded-[30px] `}>Courses</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNavbar;
