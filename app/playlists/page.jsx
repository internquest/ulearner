
import Link from 'next/link';

import React from 'react'
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import { SchibstedGroteskmed, SchibstedGroteskmreg } from '../fonts/fonts';
import Button from '../components/Button';
import Individualvideo from '../components/Individualvideo';

const page = () => {

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
            </div>
        </div>
    )
}

export default page
