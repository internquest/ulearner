"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="sticky z-10 mt-12 w-full overflow-x-auto border-b bg-white lg:top-0 lg:mt-0">
      <div className="mx-auto flex min-h-14 max-w-screen-lg items-center">
        {/* Logo */}
        {/* Navigation links */}
        <div className="flex whitespace-nowrap px-2 py-1 sm:flex-wrap lg:px-0">
          <Link href={"/projects/videos"}>
            <button
              className={`${pathname === "/projects/videos" ? "bg-orange-300" : "bg-white"} my-1 mr-2 rounded border border-solid border-black px-4 py-2 text-sm font-semibold text-[#0e0e0e]`}
            >
              Videos
            </button>
          </Link>
          <Link href={"/projects/playlists"}>
            <button
              className={`${pathname === "/projects/playlists" ? "bg-orange-300" : "bg-white"} my-1 mr-2 rounded border border-solid border-black px-4 py-2 text-sm font-semibold text-[#0e0e0e]`}
            >
              Playlists
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
