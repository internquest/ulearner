import React from 'react'
import Card from "@/app/ui/Cards/Card"
import cardData from "@/app/ui/Cards/cardData"
const Courses = () => {
    return (
        <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0'>
            <div className="text-gray-600 border bg-white mx-auto max-w-screen-lg rounded-md">
                <div className="p-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                status={card.status}
                                title={card.title}
                                description={card.description}
                                author={card.author}
                                url={card.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses
