import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-white border-b mt-12 lg:mt-0 lg:top-0 w-full z-10 sticky overflow-x-auto ">
            <div className="max-w-screen-lg mx-auto min-h-14 flex items-center ">
                {/* Logo */}
                {/* Navigation links */}
                <div className="flex py-1 whitespace-nowrap sm:flex-wrap px-2 lg:px-0">
                    {/* Sample buttons (Replace with actual links or buttons) */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
                        <button key={index} className="mr-2 my-1 bg-white text-sm text-[#0e0e0e] font-semibold px-4 py-2 border border-black border-solid rounded">
                            Button
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
