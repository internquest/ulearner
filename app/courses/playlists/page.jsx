import Link from 'next/link';
import message from '@/public/message.png'
import star from '@/public/star.png'
import Image from "next/image";
import Button from '@/app/components/Button';
import { SchibstedGroteskmed, SchibstedGroteskmreg, } from '@/app/fonts/fonts';
import Individualvideo from '@/app/components/Individualvideo';
import Videos from '@/app/components/Videos';




// import TopBar from "@/app/ui/Topbar/TopBar";
// import Card from "@/app/ui/Cards/PlaylistCard";
// import { RiSearchLine } from "react-icons/ri";
// import cardData from "@/app/ui/Cards/playlistCards.json";

const Playlists = () => {
  const playlistvideos = [
    {
      "URL": "https://youtube.com/playlist?list=PLZlEBHEeC6tVjoYN3hJ2VUbjxMmR34tnU",
      "Title": "C Language for Beginners in Hindi by Vikas Singh | by CoDing SeeKho"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXpdEQz68JGBcksqoAU9biYd",
      "Title": "CSS 2024 Tutorial Series | Master Modern Web Styling!"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXoI_n73WyeMATqdAzqZz91M",
      "Title": "Nextjs13 - Full stack web development Course (2023-2024)"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXp15fEuZbwNAPKO2UZo53cX",
      "Title": "Next.js 14 Tutorials for Web Development Mastery"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfFghEzKVmjvII5ZcBnFWQOUjtUVdDnmo",
      "Title": "Complete ML course in 60 Hours"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfFghEzKVmjubeylqAapjPc95q8TBXsnR",
      "Title": "Deep Learning Course"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB",
      "Title": "Python Tutorials"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLXXI5Oe3aCLlTFZ5GIOpuIQ8f0WED_tHU",
      "Title": "Complete PAPA REACTJS Course: From Basics to Advanced in Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-",
      "Title": "Basics of Figma Series | Ansh Mehra"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLGevxjyhYfA7bPQFIBwnxLvmB0EIe0Hot",
      "Title": "Python Tutorial Videos For Beginners"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL8p2I9GklV47ZpFC9sNHTXwJRgwwzdkNG",
      "Title": "React Testing Library with Jest Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
      "Title": "JavaScript Full Course (2024) - Beginners to Pro"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfEr2kn3s-brb-vHE-c-QCUq-nFwDYtWu",
      "Title": "React and Redux Complete Course in Hindi | Zero to Advanced"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3",
      "Title": "Complete NodeJS Course in Hindi | Notes | Certification"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLFiB2eh1-lOfKYc4161rpOznz-1aKRoCw",
      "Title": "Complete Python Tutorial for Beginners in Hindi | With Handwritten Notes and Projects | Full Python Course - 2024"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL8p2I9GklV44sj_Ikp8jQSvwD-m9htnHT",
      "Title": "Next js tutorial in Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq",
      "Title": "Complete React course for beginner"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8",
      "Title": "The Complete Frontend Development Course | 150 Hours | Zero to Advanced"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq",
      "Title": "Chai aur full stack NextJS"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
      "Title": "Chai aur Javascript"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL8p2I9GklV466xs0qGUvLGAXy6xLyEcQy",
      "Title": "Java tutorial in Hindi for beginners"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfEr2kn3s-br05lTglbEi25A1X07cvihy",
      "Title": "Tailwind CSS Complete Course in Hindi | 6 Hours"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
      "Title": "Chai aur Javascript Backend | Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL78RhpUUKSwfYr_bKHq7SWfTCBGad_xxP",
      "Title": "Complete FrontEnd/Web Development in 45 Hours with 13 Projects"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
      "Title": "Chai aur Python"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLBGx66SQNZ8a_y_CMLHchyHz_R6-6i-i_",
      "Title": "AWS Solution Architect & Sysops Tutorial for beginners in Hindi/Urdu"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy",
      "Title": "Chai aur Django"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLMj5OfHGyNU81vI77YRFg9WWvbGKqbyXD",
      "Title": "Mastering DevSecOps"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLNn5_vJ1tp1FFgjkoVNbliGf2z-VOFW_u&",
      "Title": "Javascript Masterclass for beginners in Hindi"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLMj5OfHGyNU8CpibfqLD7h3nP5tat498U",
      "Title": "Mastering Aws"
    },
    {
      "URL": "https://youtube.com/playlist?list=PL2PkZdv6p7ZmAQDditiGVbJseAaXAP8dZ",
      "Title": "Web Concepts Playlist"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXoCWolppnmdtuOB3RzzdWZY",
      "Title": "Mastering Advanced ReactJS: Techniques & Best Practices"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXpgMJm6ZGfcVO5ACs0rmoZv",
      "Title": "Unlocking the Power of Generative AI with Python: A Step-by-Step Guide"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXqvAeu9b4AeTsi9wZdAUfYp",
      "Title": "Advance Typescript Course 2024"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXrlh9yx97hGtkB2pniq9p37",
      "Title": "Advanced JavaScript #advancedjavascript"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLxzTa0VPR9rwFB4PCm7jSmKkwsI3FDCTo",
      "Title": "Python for Data Science"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLZlEBHEeC6tWlBMGaw-BEKM9XdJzavjB2",
      "Title": "C Language for Beginners in Hindi (2023-24) Live Recorded Series"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLOfLYVXrwqXqVXaL0tF9N42HtoSCNfYV4",
      "Title": "Backend API development using Python FastAPI"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLZlEBHEeC6tUO6Y51dSE5hUouJu8boIKp",
      "Title": "Java for Beginners in Hindi by Vikas Singh"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLPN-43XehstOjGY6vM6nBpSggHoAv9hkR",
      "Title": "Machine Learning"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLtS8Ubq2bIlXN5c4z-m38yNaWdMSYe6hx",
      "Title": "Python Specialization"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLPN-43XehstMPOjguAFadcWvMnaefX4gf",
      "Title": "Skill Series - Python"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLfEr2kn3s-bo4LwlbyZugHPavhcdW8YMC",
      "Title": "The Complete JavaScript Course | Zero to Advanced in 65 Hours"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLPN-43XehstM4-SWLIUS5eFxPmFJ3iHan",
      "Title": "Deep Learning"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLtS8Ubq2bIlU2XkjOZmDlTRnDmhLPpGad",
      "Title": "Cloud Computing Specialization"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLEe8jzHjtRiRQWZugdORFlqCGh18fwnSz",
      "Title": "The Complete JavaScript Course 2024: From Zero to Expert!"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLPN-43XehstNQttedytmmLPwzMCXahBRg",
      "Title": "Artificial Intelligence Tutorials"
    },
    {
      "URL": "https://youtube.com/playlist?list=PLGevxjyhYfA6GOvbGgcfEcyC4aUlJJcPb",
      "Title": "JavaScript Tutorial Videos"
    }
  ]

  return (

    <Videos videos={playlistvideos} videolink={"/courses/videos"} playlistlink={"/courses/playlists"} />

  )

  // return (
  //   <div>
  //     <TopBar />
  //     <section className="w-full bg-[#fafafa] px-0 py-4 sm:px-4 lg:px-0">
  //       <div className="mx-auto w-full max-w-screen-lg pb-4">
  //         <div className="relative">
  //           <input
  //             type="search"
  //             className="text-md w-full rounded-md border bg-white p-3 pl-10 font-normal text-gray-800 focus:border-gray-800 focus:outline-none active:border-gray-800"
  //             placeholder="Search Jobs"
  //           />
  //           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lg">
  //             <RiSearchLine className="text-gray-400" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mx-auto max-w-screen-lg rounded-md border bg-white text-gray-600">
  //         <div className="px-4 pt-4">
  //           <p className="text-[.8125rem] font-medium leading-5 text-[#666]">
  //             YOUR TOP JOB MATCHES ON UNTAPPED
  //           </p>
  //         </div>
  //         <div className="p-4">
  //           <div className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-[#f0e6ff] p-4 md:gap-x-4">
  //             <p className="text-md text-gray-800 selection:bg-lime">
  //               <span className="font-bold">A better way of searching.</span> We
  //               improved how we sort jobs so you see the jobs that are the best
  //               fit for you first.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="p-4 pt-0">
  //           <div className="grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
  //             {cardData.map((card, index) => (
  //               <Card
  //                 key={index}
  //                 title={card.title}
  //                 url={card.url}
  //                 techStack={card.techStack}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default Playlists;
