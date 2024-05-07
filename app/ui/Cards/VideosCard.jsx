/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
const VideosCard = ({ title, author, url }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="mx-auto h-full p-4 bg-white border rounded-[4px] shadow-sm flex flex-col justify-between cursor-pointer animate-pulse">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="bg-gray-200 py-1 px-2 rounded-sm font-semibold text-xs leading-4"></span>
                                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-lg leading-6 text-start font-semibold h-5 bg-gray-200 rounded animate-pulse"></h2>
                                <p className="mt-2 text-gray-200 leading-7 tracking-normal h-3 bg-gray-200 rounded animate-pulse"></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-10 h-10 mr-3 rounded-xl bg-gray-200 animate-pulse"></div>
                            <span className="font-medium leading-10 text-gray-200 cursor-pointer tracking-normal h-3 bg-gray-200 rounded animate-pulse"></span>
                        </div>
                    </div>
                </>
            ) : (
                <Link href={url} target="_blank">
                    <div className="min-h-52 mx-auto h-full p-4 bg-white border rounded-md shadow-sm flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="mt-2 flex justify-between">
                                <h2 href="#" className="text-lg leading-6 text-start font-semibold text-gray-800 tracking-normal">
                                    {title}
                                </h2>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="leading-10 text-blue-600 text-base tracking-normal font-medium" tabIndex="0" role="link">
                                {author}
                            </p>
                        </div>
                    </div>
                </Link>

            )}
        </div>
    );
};

export default VideosCard;
