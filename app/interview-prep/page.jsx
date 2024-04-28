import React from 'react'
import Card from "@/app/ui/Cards/InterviewPrepCard"
import TopBar from '../ui/Topbar/TopBar'
import { RiSearchLine } from 'react-icons/ri'
import cardData from "@/app/ui/Cards/interviewPrepCards.json"

const InterviewPrep = () => {
    return (
        <>
            <TopBar />
            <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0'>
                <div className='max-w-screen-lg mx-auto pb-4 w-full'>
                    <div className='relative'>
                        <input
                            type='search'
                            className='w-full p-3 pl-10 rounded-md border active:border-gray-800 focus:border-gray-800 focus:outline-none bg-white text-gray-800 font-normal text-md'
                            placeholder='Search Jobs'
                        />
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-lg'>
                            <RiSearchLine className='text-gray-400 ' />
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 border bg-white mx-auto max-w-screen-lg rounded-md">
                    <div className='px-4 pt-4'>
                        <p className='text-[.8125rem] leading-5 text-[#666] font-medium'>YOUR TOP JOB MATCHES ON UNTAPPED</p>
                    </div>
                    <div className='p-4'>
                        <div className="flex items-center w-full justify-between p-4 bg-[#f0e6ff] border border-gray-200 md:gap-x-4 rounded-md">
                            <p className="text-md text-gray-800 selection:bg-lime">
                                <span className='font-bold'>A better way of searching.
                                </span> We improved how we sort jobs so you see the jobs that are the best fit for you first.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 pt-0 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch">
                            {cardData.map((card, index) => (
                                <Card
                                    key={index}
                                    title={card.title}
                                    channel={card.channel}
                                    url={card.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InterviewPrep
