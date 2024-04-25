"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const TopBar = () => {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <div className="bg-white border-b mt-12 lg:mt-0 lg:top-0 w-full z-10 sticky overflow-x-auto ">
            <div className="max-w-screen-lg mx-auto min-h-14 flex items-center ">
                {/* Logo */}
                {/* Navigation links */}
                <div className="flex py-1 whitespace-nowrap sm:flex-wrap px-2 lg:px-0">
                    <Link href={'/projects/videos'}>
                        <button className={`${pathname === '/projects/videos' ? 'bg-orange-300' : 'bg-white'}  mr-2 my-1  text-sm text-[#0e0e0e] font-semibold px-4 py-2 border border-black border-solid rounded`}>
                            Videos
                        </button>
                    </Link>
                    <Link href={'/projects/playlists'}>
                        <button className={`${pathname === '/projects/playlists' ? 'bg-orange-300' : 'bg-white'}  mr-2 my-1  text-sm text-[#0e0e0e] font-semibold px-4 py-2 border border-black border-solid rounded`}>
                            Playlists
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
