import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';




// import TopBar from "@/app/ui/Topbar/TopBar";
// import Card from "@/app/ui/Cards/PlaylistCard";
// import { RiSearchLine } from "react-icons/ri";
// import cardData from "@/app/ui/Cards/playlistCards.json";

const Playlists = () => {

  const videos = [
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },


  ]
  return (
    <div className="px-5">
      <div className="flex whitespace-nowrap justify-end px-2 py-5 mx-12 sm:flex-wrap lg:px-0">
        <Link href={"/interview-prep/videos"} >

          <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Videos"} path={"/interview-prep/videos"} />
        </Link>
        <Link href={"/interview-prep/playlists"}>
          <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Playlists"} path={"/interview-prep/playlists"} />

        </Link>
      </div>
      <div className="border-t border-[#D7D7D780]/[.5]  ">
        {
          videos.map((video, index) => <Individualvideo key={index} title={video.title} videourl={video.videourl} />)
        }
      </div>
    </div>
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
