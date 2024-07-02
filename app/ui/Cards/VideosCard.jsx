/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    <div className={`w-full ${isLoading ? "animate-pulse" : ""}`}>
      {isLoading ? (
        <>
          <div className="mx-auto flex h-full animate-pulse cursor-pointer flex-col justify-between rounded-[4px] border bg-white p-4 shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-sm bg-gray-200 px-2 py-1 text-xs font-semibold leading-4"></span>
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200"></div>
              </div>
              <div className="mt-2">
                <h2 className="h-5 animate-pulse rounded bg-gray-200 text-start text-lg font-semibold leading-6"></h2>
                <p className="mt-2 h-3 animate-pulse rounded bg-gray-200 leading-7 tracking-normal text-gray-200"></p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="mr-3 h-10 w-10 animate-pulse rounded-xl bg-gray-200"></div>
              <span className="h-3 animate-pulse cursor-pointer rounded bg-gray-200 font-medium leading-10 tracking-normal text-gray-200"></span>
            </div>
          </div>
        </>
      ) : (
        <Link href={url} target="_blank">
          <div className="mx-auto flex h-full min-h-52 cursor-pointer flex-col justify-between rounded-md border bg-white p-4 shadow-sm">
            <div>
              <div className="mt-2 flex justify-between">
                <h2
                  href="#"
                  className="text-start text-lg font-semibold leading-6 tracking-normal text-gray-800"
                >
                  {title}
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <p
                className="text-base font-medium leading-10 tracking-normal text-blue-600"
                tabIndex="0"
                role="link"
              >
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
