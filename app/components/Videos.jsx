'use client'
import { useState } from 'react';
import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';

const Videos = ({ videos, videolink, playlistlink }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 10;

    // const videos = [
    //   {
    //     "YT URL": "https://youtu.be/Z_ikDlimN6A",
    //     "Video Title": "Learn PyTorch for deep learning in a day. Literally."
    //   },
    //   {
    //     "YT URL": "https://youtu.be/Sc64ZiW2xPA",
    //     "Video Title": "Complete GSAP Animation Course"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/lzKeecy4OmQ",
    //     "Video Title": "Rust 101 Crash Course: Learn Rust (6 HOURS!) + 19 Practice Exercises | Zero To Mastery"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/r67SfaiYaDI",
    //     "Video Title": "Intro to Machine Learning & Data Science in 2024 (+Pandas, NumPy, Matplotlib)"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/LWiMwhDZ9as",
    //     "Video Title": "Learn Prompt Engineering: Full Beginner Crash Course (5 HOURS!)"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/JKtt21lsq9w",
    //     "Video Title": "Web Development Concepts using Google Home Page | Google Dev Tools"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/ChVE-JbtYbM",
    //     "Video Title": "12-Hour NodeJS Express MongoDB Tutorial 2023 | MERN stack in Hindi"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/YlW2X5obUW8",
    //     "Video Title": "C Programming Full Tutorial in One Video (2024) C full course by Vikas"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/UWOVipHUZaM",
    //     "Video Title": "Mathematics for Computer Science (Full Course)"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/0z6AhrOSrRs",
    //     "Video Title": "Mathematics for Machine Learning Tutorial (3 Complete Courses in 1 video)"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/EerdGm-ehJQ",
    //     "Video Title": "JavaScript Tutorial Full Course - Beginner to Pro (2024)"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/xc3a_CJhjCc",
    //     "Video Title": "JavaScript Mastery Complete Course | JavaScript Tutorial For Beginner to Advanced"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/1PAy6d16ADQ",
    //     "Video Title": "IBM Data Analyst Complete Course | Data Analyst Tutorial For Beginners,"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/GiyL4KFRNBA",
    //     "Video Title": "React js full tutorial in Hindi | Complete Course"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/4XTsAAHW_Tc",
    //     "Video Title": "Complete Java, Spring, and Microservices course"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/eILUmCJhl64",
    //     "Video Title": "React & Redux Complete Course (2024) with Projects | Notes | Free Certification"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/lGmRnu--iU8",
    //     "Video Title": "Complete JavaScript Course + Notes for Beginners in Hindi"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/H3XIJYEPdus",
    //     "Video Title": "From Zero to Full Stack: Master JavaScript and Create Dynamic Web Apps"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/a7AxbqMjSuQ",
    //     "Video Title": "Full Python Course for Beginners in Hindi | Python Tutorial for Beginners"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/wI4HWGlI6gM",
    //     "Video Title": "[[ 8.5 HOURS ]] Complete SQL End to End - SQL Server Tutorial { End to End } Full Course Beginners"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/TO4aQ3ghFOc",
    //     "Video Title": "FastAPI Beyond CRUD Full Course - A FastAPI Course"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/4dscVzCaXCU",
    //     "Video Title": "AWS EC2 Full Course | From Beginner to Expert | Deploy Real-Time Projects on AWS"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/dz458ZkBMak",
    //     "Video Title": "React JS Full Course 2024 | 6+ Projects | 15 Hours"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/mQnWCmVErnw",
    //     "Video Title": "Next.js Full Course 2024 | Learn Next.js 14 In One Video | 14 Hours"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/u64gyCdqawU",
    //     "Video Title": "Android APP Development Full Course with PRACTICAL (41 Hours) | Learn App Development in 2024"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/pmvEgZC55Cg",
    //     "Video Title": "Advanced MERN Auth Course: Email Verification, Password Recovery, and Welcome Emails"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/FpfHmAkRVK4",
    //     "Video Title": "C++ A complete and modern course for beginners"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/4DqAvWonPAg",
    //     "Video Title": "Complete react course with 10 projects"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/lAFbKzO-fss",
    //     "Video Title": "React JS Full Course 2024"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/ThKukf8i35U",
    //     "Video Title": "Mastering AWS : Complete Course with Real-Time Tasks in 15 Hours | PART - 1"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/meLHByVrbOw",
    //     "Video Title": "Mastering AWS: Aws Full Course in 15 Hours Part 2 | #saikiranpinapathruni"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/6SJQ5eOChrA",
    //     "Video Title": "Master REST APIs - The Beginner's Guide (Hands-on Tutorial) | Hindi"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/tww-gbNPOcA",
    //     "Video Title": "Master MONGODB in ONE VIDEO: Beginner to Advanced Course For Beginners in Hindi | MPrashant"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/6l8RWV8D-Yo",
    //     "Video Title": "10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi"
    //   },
    //   {
    //     "YT URL": "https://youtu.be/32DLasxoOiM",
    //     "Video Title": "Java Programming Full Tutorial in One Video (2024) | Java full course"
    //   }
    // ];

    // Calculate pagination
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(videos.length / videosPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
    };

    console.log(videolink, playlistlink)
    return (
        <div className="px-5">
            <div className="flex whitespace-nowrap justify-end px-2 py-5 mx-12 sm:flex-wrap lg:px-0">
                <Link href={videolink} >

                    <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Videos"} path={videolink} />
                </Link>
                <Link href={playlistlink}>
                    <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Playlists"} path={playlistlink} />

                </Link>
            </div>
            <div className="border-t border-[#D7D7D780]/[.5]  ">
                {currentVideos.map((video, index) => <Individualvideo key={index} title={video['Title']} videourl={video['URL']} />)}
            </div>

            {/* New Pagination controls */}
            <div className="flex justify-center items-center mt-8  mb-8">
                <span className="mx-2">
                    Showing {((currentPage - 1) * videosPerPage) + 1} - {Math.min(currentPage * videosPerPage, videos.length)} of {videos.length}
                </span>
                <button
                    onClick={() => paginate(1)}
                    className="mx-1 p-[6px] rounded bg-[#030712] disabled:text-[#4b5563] disabled:bg-[#11182799] text-[#f9fafb]"
                    disabled={currentPage === 1}
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" class="remixicon size-4 shrink-0"><path d="M4.83578 12L11.0429 18.2071L12.4571 16.7929L7.66421 12L12.4571 7.20712L11.0429 5.79291L4.83578 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>
                </button>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    className="mx-1 p-[6px] rounded  bg-[#030712] disabled:text-[#4b5563] disabled:bg-[#11182799] text-[#f9fafb]"
                    disabled={currentPage === 1}
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" class="remixicon size-4 shrink-0"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                </button>

                <button
                    onClick={() => paginate(currentPage + 1)}
                    className="mx-1 p-[6px] rounded   bg-[#030712] disabled:text-[#4b5563] disabled:bg-[#11182799] text-[#f9fafb]"
                    disabled={currentPage === totalPages}
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" class="remixicon size-4 shrink-0"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                </button>
                <button
                    onClick={() => paginate(totalPages)}
                    className="mx-1 p-[6px] rounded  bg-[#030712] disabled:text-[#4b5563] disabled:bg-[#11182799] text-[#f9fafb]"
                    disabled={currentPage === totalPages}
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" class="remixicon size-4 shrink-0"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>
                </button>
            </div>
        </div>
    )

}

export default Videos