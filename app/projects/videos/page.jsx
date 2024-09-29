import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';
import Videos from '@/app/components/Videos';




// import TopBar from "@/app/ui/Topbar/TopBar";
// import Card from "@/app/ui/Cards/VideosCard";
// import { RiSearchLine } from "react-icons/ri";
// import cardData from "@/app/ui/Cards/videosCards.json";

const VideosPage = () => {

  const projectsvideos = [
    {
      "URL": "https://youtu.be/grxNze3hjAQ",
      "Title": "Build a Fullstack Job Board App with Next.js 14 (react.js, mongo, tailwind)"
    },
    {
      "URL": "https://youtu.be/klJXE11pGVw",
      "Title": "Build a Fullstack Calendly Clone with Next.js"
    },
    {
      "URL": "https://youtu.be/o1R6j9b-NVw",
      "Title": "Build a fullstack Buymeacoffee clone with Next.js"
    },
    {
      "URL": "https://youtu.be/BgFDbsJ7J00",
      "Title": "Build fullstack Linktree clone with Next.js, tailwind and mongodb"
    },
    {
      "URL": "https://youtu.be/nGoSP3MBV2E",
      "Title": "Build a Fullstack Food Ordering App with Next.js 14 (react.js, mongo, tailwind)"
    },
    {
      "URL": "https://youtu.be/3oy8Mqc8zec",
      "Title": "Build a Fullstack SEO Rank Tracker App with Next.js 13 and Bright Data"
    },
    {
      "URL": "https://youtu.be/F5EYXc91Cpo",
      "Title": "Build a FullStack Job Portal App with MERN Stack (MongoDB, Express, React Js, Node Js)"
    },
    {
      "URL": "https://youtu.be/h991oLxOxeM",
      "Title": "Python Chat App Tutorial for Beginners - Full Course 2024"
    },
    {
      "URL": "https://youtu.be/0yboGn8errU",
      "Title": "Let's Build Google Gemini 2.0 Using React JS and Gemini API | Gemini Clone In React 2024"
    },
    {
      "URL": "https://youtu.be/sQD0iDwM284",
      "Title": "Django Social Media App | Django and Vue Full Stack Course"
    },
    {
      "URL": "https://youtu.be/QIKSyYRosrk",
      "Title": "Build AI Code Snippet Generator using React, typescript , tailwind , Gemini Ai , MongoDB #trending"
    },
    {
      "URL": "https://youtu.be/EzkWAviyYgg",
      "Title": "Build ChatGPT In React JS Using OpenAI API | Create ChatGPT Clone Using React JS"
    },
    {
      "URL": "https://youtu.be/LH-S5v-D3hA",
      "Title": "MERN E-Commerce - Admin Panel, Redux Toolkit, Payment Gateway, Cloud Deployment, Emails (Hindi)"
    },
    {
      "URL": "https://youtu.be/QhLpMiH5Ws4",
      "Title": "Building a Responsive News Homepage | HTML, SCSS, JS"
    },
    {
      "URL": "https://youtu.be/nl9VlTA-AfE",
      "Title": "Build a school/education landing page with HTML & CSS"
    },
    {
      "URL": "https://youtu.be/SJP29lhlar8",
      "Title": "App Store UI - React Native App with Expo & Tailwind css | Voiceover English"
    },
    {
      "URL": "https://youtu.be/VAaUy_Moivw",
      "Title": "MERN Stack Project: Build a Modern Real Estate Marketplace with react MERN (jwt, redux toolkit)"
    },
    {
      "URL": "https://youtu.be/iIkJrwVUl1c",
      "Title": "Project 1: End To End Python ML Project (Complete)| Machine Learning Tutorials Using Python In Hindi"
    },
    {
      "URL": "https://youtu.be/glAC7d-TYSM",
      "Title": "Full Stack React JS Project ( Calendly Clone ) - Next JS, Shadcn, Tailwind, Clerk, NeonDB Tutorial"
    },
    {
      "URL": "https://youtu.be/PuOVqP_cjkE",
      "Title": "Build and Deploy a Banking App with Finance Management Dashboard Using Next.js 14"
    },
    {
      "URL": "https://youtu.be/_4CPp670fK4",
      "Title": "MERN Stack Full Course - ECommerce App with Admin Panel : React, Redux Toolkit, Tailwind, MongoDB"
    },
    {
      "URL": "https://youtu.be/wjjcYfccDFI",
      "Title": "Build a Fullstack E-Commerce App using Next.js 13, MongoDB, Firebase, Strapi, Tailwind CSS [2023]"
    },
    {
      "URL": "https://youtu.be/2XF-HgauItk",
      "Title": "Full Stack React JS Project ( Job Portal ) - with Tailwind, Supabase, Clerk, Shadcn UI Tutorial"
    },
    {
      "URL": "https://youtu.be/NPHT51uF1sE",
      "Title": "Build Captions Generator with Next.js and React"
    },
    {
      "URL": "https://youtu.be/mduqkHlJujA",
      "Title": "Build an OnlyFans with Next.js, Stripe and React | Complete Guide 2024"
    },
    {
      "URL": "https://youtu.be/G4V4xO9wyD8",
      "Title": "12+ Hour MERN Masterclass: Build and Deploy a Threads App with Real-Time Chat Functionality"
    },
    {
      "URL": "https://youtu.be/zWF7O7aHQW4",
      "Title": "Build a full stack project with React and Appwrite"
    },
    {
      "URL": "https://youtu.be/tWHXaSC2T_s",
      "Title": "JavaScript and Python - Build and Deploy a Full Stack Web App"
    },
    {
      "URL": "https://youtu.be/BbnJSd3nZhE",
      "Title": "Build a Feedback Board with Next.js 13 (react.js, mongo, tailwind.css)"
    },
    {
      "URL": "https://youtu.be/psB9vBxPqvE",
      "Title": "Full-Stack Airbnb Clone Tutorial: Django, Django Rest Framework & Next.js | With real time chat"
    },
    {
      "URL": "https://youtu.be/d-_6hWYliGs",
      "Title": "Build a Realtime Polling system with Angular, Tailwind CSS and Firebase"
    },
    {
      "URL": "https://youtu.be/zw8z_o_kDqc",
      "Title": "Let's Go! React with Go Complete Full Stack App - TypeScript, React Query // Go for Node Developers"
    },
    {
      "URL": "https://youtu.be/_xKCi5OI_Mg",
      "Title": "File sharing app with deployment in Node Js, Express Js, Mongo DB in Hindi"
    },
    {
      "URL": "https://youtu.be/v8qXKIPgLfM",
      "Title": "Build a Stack overflow clone with NextJS and Appwrite"
    },
    {
      "URL": "https://youtu.be/Ycg48pVp3SU",
      "Title": "Build a Linkedin Clone with React and Node.js | Full Stack Tutorial"
    },
    {
      "URL": "https://youtu.be/9e7CTR2Ya4Y",
      "Title": "Django Channels Real-time Communication Project: Building a Chat Website"
    },
    {
      "URL": "https://youtu.be/STcLo0cOZYo",
      "Title": "Build 50 JavaScript Projects - Vanilla JavaScript Course | (Hindi/Urdu) | Part 1"
    }
  ]

  return (
    <Videos videos={projectsvideos} videolink={"/projects/videos"} playlistlink={"/projects/playlists"} />

  )


  // return (
  //   <>
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
  //                 status={card.status}
  //                 title={card.title}
  //                 description={card.description}
  //                 author={card.author}
  //                 url={card.url}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};

export default VideosPage;
