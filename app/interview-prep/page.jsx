import React from "react";
import Card from "@/app/ui/Cards/InterviewPrepCard";
import TopBar from "../ui/Topbar/TopBar";
import { RiSearchLine } from "react-icons/ri";
import cardData from "@/app/ui/Cards/interviewPrepCards.json";

const InterviewPrep = () => {
  return (
    <>
      <TopBar />
      <section className="w-full bg-[#fafafa] px-0 py-4 sm:px-4 lg:px-0">
        <div className="mx-auto w-full max-w-screen-lg pb-4">
          <div className="relative">
            <input
              type="search"
              className="text-md w-full rounded-md border bg-white p-3 pl-10 font-normal text-gray-800 focus:border-gray-800 focus:outline-none active:border-gray-800"
              placeholder="Search Jobs"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
              <RiSearchLine className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg rounded-md border bg-white text-gray-600">
          <div className="px-4 pt-4">
            <p className="text-[.8125rem] font-medium leading-5 text-[#666]">
              YOUR TOP JOB MATCHES ON UNTAPPED
            </p>
          </div>
          <div className="p-4">
            <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-[#f0e6ff] p-4 md:gap-x-4">
              <p className="text-md text-gray-800 selection:bg-lime">
                <span className="font-bold">A better way of searching.</span> We
                improved how we sort jobs so you see the jobs that are the best
                fit for you first.
              </p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default InterviewPrep;
