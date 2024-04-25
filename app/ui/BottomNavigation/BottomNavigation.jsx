/* eslint-disable @next/next/no-img-element */
import { FaRegComment, FaRegBell } from 'react-icons/fa';
import { IoHome, IoCompassOutline } from 'react-icons/io5';

const BottomNavigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-screen z-10 h-20 bg-white pt-2 text-gray-600 lg:hidden shadow-inner">
            {/* Navigation icons */}
            <div className="flex justify-center">
                <a href="#" className="flex flex-col items-center text-xs mx-3 my-0">
                    <IoHome className="text-xl mb-1" />
                    Home
                </a>
                <a href="#" className="flex flex-col items-center text-xs mx-3 my-0">
                    <IoCompassOutline className="text-xl mb-1" />
                    Jobs
                </a>
                <a href="#" className="flex flex-col items-center text-xs mx-3 my-0">
                    <FaRegComment className="text-xl mb-1" />
                    Messages
                </a>
                <a href="#" className="flex flex-col items-center text-xs mx-3 my-0">
                    <FaRegBell className="text-xl mb-1" />
                    Activity
                </a>
                <a href="#" className="flex flex-col items-center text-xs mx-3 my-0">
                    <img src="https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg" className="rounded-full w-5 h-5 mb-1" alt="" />
                    Profile
                </a>
            </div>
        </nav>
    );
};

export default BottomNavigation;
