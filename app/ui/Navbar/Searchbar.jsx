import { SchibstedGroteskmed, SchibstedGroteskmreg } from '@/app/fonts/fonts'
import React from 'react'

const Searchbar = () => {
    return (
        <div className={`${SchibstedGroteskmreg} w-[650px] font-normal text-[1rem] leading-[1.3rem] tracking-tighter h-[50px] rounded-[25px] flex px-5 items-center bg-white`}>

            <input type="search" name="" id="" className={`outline-none border-none w-[349px] ${SchibstedGroteskmed.className} `} placeholder='Search for techstack & courses (Coming Soon...)' />
        </div>
    )
}

export default Searchbar
