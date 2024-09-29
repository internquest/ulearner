import React from 'react'
import Searchbar from './Searchbar'
import Image from 'next/image'
import settings from '@/public/settings.png'
import Nerm from '@/public/Nerm.png'

const Navbar = () => {
    return (
        <div className='[grid-area:1/2/2/3] flex justify-between '>
            <Searchbar />
            <div className='flex gap-2 '>
                <div className='relative rounded-full w-[50px] h-[50px] flex justify-center items-center bg-white'>
                    <Image src={settings} alt='' priority={true} height={30} width={30} />
                </div>
                <div className='relative rounded-full  bg-white'>
                    <Image src={Nerm} alt='' priority={true} height={50} width={50} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
