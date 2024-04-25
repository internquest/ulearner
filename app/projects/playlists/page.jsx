import TopBar from "@/app/ui/Topbar/TopBar"
import Card from "@/app/ui/Cards/Card"
import cardData from "@/app/ui/Cards/cardData"
const Playlists = () => {
    return (
        <div>
            <TopBar />
            <section className='bg-[#fafafa] w-full py-4 px-0 sm:px-4 lg:px-0'>
                <div className="text-gray-600 border bg-white mx-auto max-w-screen-lg rounded-md">
                    <div className='p-4'>
                        <div className="flex items-center w-full justify-between p-4 bg-[#f0e6ff] border border-gray-200 md:gap-x-4 rounded-md">
                            <p className="text-md text-gray-800 selection:bg-lime">
                                <span className='font-bold'>A better way of searching.
                                </span> We improved how we sort jobs so you see the jobs that are the best fit for you first.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 pt-0">
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
        </div>
    )
}

export default Playlists
