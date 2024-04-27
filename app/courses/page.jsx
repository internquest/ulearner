import React from 'react'
import Card from "@/app/ui/Cards/CoursesCard"
const cardData = [
    {
        key: 1,
        title: "Complete C++ Tutorial in One Shot 2023 | Beginner to Advanced | Basics of C++ Programming",
        author: "College Wallah",
        date: "Sep, 23",
        url: "https://github.com/"
    },
    {
        key: 2,
        title: "C++ Programming Course - Basics to Advanced",
        author: "freeCodeCamp.org",
        date: "Feb, 22",
        url: "https://github.com/"
    },
    {
        key: 3,
        title: "C++ A complete and modern course for beginners",
        author: "Hitesh Choudhary",
        date: "Dec, 22",
        url: "https://github.com/"
    },
]
const Courses = () => {
    return (
        <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0'>
            <div className="text-gray-600 border bg-white mx-auto max-w-screen-lg rounded-md">
                <div className="p-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                author={card.author}
                                date={card.date}
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
