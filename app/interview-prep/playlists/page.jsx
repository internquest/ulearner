import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';
import Videos from '@/app/components/Videos';




// import TopBar from "@/app/ui/Topbar/TopBar";
// import Card from "@/app/ui/Cards/PlaylistCard";
// import { RiSearchLine } from "react-icons/ri";
// import cardData from "@/app/ui/Cards/playlistCards.json";

const Playlists = () => {

  const videos = [
    {
      "URL": "https://youtube.com/playlist?list=PLZlEBHEeC6tVvPPtxdz6M9TSH5ZgjxsPu",
      "Title": "Data Structure Using C/C++"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLKhlp2qtUcSZiWKJTi5-5r6IRdHhxP9ZU",
      "Title": "React JS Interview Questions"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL3aZbxdSiCbM9EfasmUTQ4njpZ-E5P6zd",
      "Title": "React Interview Questions by Interview Happy"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL3aZbxdSiCbOBbNqpsFmn9aUQUcYmg7Kz",
      "Title": "Node.js Interview Questions by Interview Happy"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7",
      "Title": "Data Structures and Algorithm With JavaScript in Hindi | DSA in JavaScript"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
      "Title": "Data Structures and Algorithms Course in Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLBBK9G6O8MPDVnh4ANEuL9YfejSSdacSg",
      "Title": "Tricky Java Interview Questions"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLXQpH_kZIxTVwiGpOqnkFb1-aHMIai7ld",
      "Title": "Javascript Interview questions"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLBBK9G6O8MPBosgokQfKpo8Aj6yq49whX",
      "Title": "Core Java Interview Questions"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLNn5_vJ1tp1EaVSigz5bpm0KuNITJjxCf",
      "Title": "Blind 75 Sheet of Leetcode"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLGf6Ram2AQh3TBegS5vzNcQQeEFve8Kmj",
      "Title": "MySQL Exercises and Questions and Answers"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLBBK9G6O8MPDEeSVG17Pwya2xlUNbZn30",
      "Title": "Multithreading Java"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4",
      "Title": "Data Structures and Algorithms in Javascript | DSA with JS"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5",
      "Title": "Javascript Interview Questions"
    }
  ]
  return (
    <Videos videos={videos} videolink={"/interview-prep/videos"} playlistlink={"/interview-prep/playlists"} />
  )

  // return (
  //   <div>
  //     <TopBar />
  //     <section className="w-full bg-[#fafafa] px-0 py-4 sm:px-4 lg:px-0">
  //       <div className="mx-auto w-full max-w-screen-lg pb-4">
  //         <div className="relative">
  //           <input
  //             type="search"
  //             className="text-md w-full rounded-md border bg-white p-3 pl-10 font-normal text-gray-800 focus:border-gray-800 focus:outline-none active:border-gray-800"
  //             placeholder="Search Jobs"
  //           />
  //           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
  //             <RiSearchLine className="text-gray-400" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mx-auto max-w-screen-lg rounded-md border bg-white text-gray-600">
  //         <div className="px-4 pt-4">
  //           <p className="text-[.8125rem] font-medium leading-5 text-[#666]">
  //             YOUR TOP JOB MATCHES ON UNTAPPED
  //           </p>
  //         </div>
  //         <div className="p-4">
  //           <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-[#f0e6ff] p-4 md:gap-x-4">
  //             <p className="text-md text-gray-800 selection:bg-lime">
  //               <span className="font-bold">A better way of searching.</span> We
  //               improved how we sort jobs so you see the jobs that are the best
  //               fit for you first.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="p-4 pt-0">
  //           <div className="grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
  //             {cardData.map((card, index) => (
  //               <Card
  //                 key={index}
  //                 title={card.title}
  //                 url={card.url}
  //                 techStack={card.techStack}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default Playlists;
