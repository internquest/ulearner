
import Link from "next/link";

import React from "react";
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import { SchibstedGroteskmed, SchibstedGroteskmreg } from "./fonts/fonts";
import Individualvideo from "./components/Individualvideo";
import Button from "./components/Button";

const App = () => {
  // const url = 'https://youtu.be/VkWJQe_EsjQ'


  const videos = [
    {
      title: "JavaScript Full Course (2024) - Basic to Advance",
      videourl: ""
    },
    {
      title: "JavaScript Full Course (2024) -  Advance",
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
  // fetch(url, { mode: "cors" })
  //   .then(response => response)
  //   .then((response) => console.log(response))

  return (
    <div className="px-5">
      <div className="flex whitespace-nowrap justify-end px-2 py-5 mx-12 sm:flex-wrap lg:px-0">
        <Link href={"/videos"} >

          <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Videos"} path={"/videos"} />
        </Link>
        <Link href={"/playlists"}>
          <Button css={` my-1 mr-2 rounded-[30px] border border-solid border-[#EFF2F1] px-4 py-2 text-sm ${SchibstedGroteskmed.className} font-semibold text-[#0e0e0e]`} name={"Playlists"} path={"/playlists"} />

        </Link>
      </div>
      <div className="border-t border-[#D7D7D780]/[.5]  ">
        {
          videos.map((video, index) => <Individualvideo key={index} title={video.title} videourl={video.videourl} />)
        }


        {/* <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} className="aspect-square" />
              <Image src={star} alt="" width={20} height={20} className="aspect-square" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div className=" flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
          <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>JavaScript Full Course (2024) - Basic to Advance</h2>
          <div className="flex gap-16">
            <p className={`${SchibstedGroteskmreg.className} font-medium text-[1rem] leading-[1.5rem] text-[#909291]`}>{new Date().getDate()} Aug</p>
            <div className="flex gap-6 ">
              <Image src={message} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
};

export default App;

