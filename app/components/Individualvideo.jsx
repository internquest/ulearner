'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { SchibstedGroteskmed } from '../fonts/fonts';
import message from '@/public/message.png';
import star from '@/public/star.png';

const Individualvideo = ({ title, videourl }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="flex justify-between border-b mt-4 border-[#D7D7D780]/[.5] pb-3 pl-5">
            <Link href={videourl} target='_blank'>
                <h2 className={`${SchibstedGroteskmed.className} font-normal text-[1rem] leading-[1.5rem] text-[#1C1C1C]`}>{title}</h2>
            </Link>
            <div className="flex gap-6 items-center">
                <div className="relative">
                    <Image
                        src={message}
                        alt="Message"
                        className='aspect-square'
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    />
                    {showTooltip && (
                        <div className={`${SchibstedGroteskmed.className} custom-tooltip`}>
                            More coming
                            <div className="tooltip-arrow"></div>
                        </div>
                    )}
                </div>
                <Image src={star} alt="" className='aspect-square' />
            </div>
        </div>
    );
};

export default Individualvideo;


