/* eslint-disable @next/next/no-img-element */
import { FaRegComment, FaRegBell } from "react-icons/fa";
import { IoHome, IoCompassOutline } from "react-icons/io5";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-10 h-20 w-screen bg-white pt-2 text-gray-600 shadow-inner lg:hidden">
      {/* Navigation icons */}
      <div className="flex justify-center">
        <a href="#" className="mx-3 my-0 flex flex-col items-center text-xs">
          <IoHome className="mb-1 text-xl" />
          Home
        </a>
        <a href="#" className="mx-3 my-0 flex flex-col items-center text-xs">
          <IoCompassOutline className="mb-1 text-xl" />
          Jobs
        </a>
        <a href="#" className="mx-3 my-0 flex flex-col items-center text-xs">
          <FaRegComment className="mb-1 text-xl" />
          Messages
        </a>
        <a href="#" className="mx-3 my-0 flex flex-col items-center text-xs">
          <FaRegBell className="mb-1 text-xl" />
          Activity
        </a>
        <a href="#" className="mx-3 my-0 flex flex-col items-center text-xs">
          <img
            src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg"
            className="mb-1 h-5 w-5 rounded-full"
            alt=""
          />
          Profile
        </a>
      </div>
    </nav>
  );
};

export default BottomNavigation;
