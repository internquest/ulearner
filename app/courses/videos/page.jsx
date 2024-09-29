
import Videos from '@/app/components/Videos';

const VideosPage = () => {



  const videos = [
    {
      "URL": "https://youtu.be/Z_ikDlimN6A",
      "Title": "Learn PyTorch for deep learning in a day. Literally."
    },
    {
      "URL": "https://youtu.be/Sc64ZiW2xPA",
      "Title": "Complete GSAP Animation Course"
    },
    {
      "URL": "https://youtu.be/lzKeecy4OmQ",
      "Title": "Rust 101 Crash Course: Learn Rust (6 HOURS!) + 19 Practice Exercises | Zero To Mastery"
    },
    {
      "URL": "https://youtu.be/r67SfaiYaDI",
      "Title": "Intro to Machine Learning & Data Science in 2024 (+Pandas, NumPy, Matplotlib)"
    },
    {
      "URL": "https://youtu.be/LWiMwhDZ9as",
      "Title": "Learn Prompt Engineering: Full Beginner Crash Course (5 HOURS!)"
    },
    {
      "URL": "https://youtu.be/JKtt21lsq9w",
      "Title": "Web Development Concepts using Google Home Page | Google Dev Tools"
    },
    {
      "URL": "https://youtu.be/ChVE-JbtYbM",
      "Title": "12-Hour NodeJS Express MongoDB Tutorial 2023 | MERN stack in Hindi"
    },
    {
      "URL": "https://youtu.be/YlW2X5obUW8",
      "Title": "C Programming Full Tutorial in One Video (2024) C full course by Vikas"
    },
    {
      "URL": "https://youtu.be/UWOVipHUZaM",
      "Title": "Mathematics for Computer Science (Full Course)"
    },
    {
      "URL": "https://youtu.be/0z6AhrOSrRs",
      "Title": "Mathematics for Machine Learning Tutorial (3 Complete Courses in 1 video)"
    },
    {
      "URL": "https://youtu.be/EerdGm-ehJQ",
      "Title": "JavaScript Tutorial Full Course - Beginner to Pro (2024)"
    },
    {
      "URL": "https://youtu.be/xc3a_CJhjCc",
      "Title": "JavaScript Mastery Complete Course | JavaScript Tutorial For Beginner to Advanced"
    },
    {
      "URL": "https://youtu.be/1PAy6d16ADQ",
      "Title": "IBM Data Analyst Complete Course | Data Analyst Tutorial For Beginners,"
    },
    {
      "URL": "https://youtu.be/GiyL4KFRNBA",
      "Title": "React js full tutorial in Hindi | Complete Course"
    },
    {
      "URL": "https://youtu.be/4XTsAAHW_Tc",
      "Title": "Complete Java, Spring, and Microservices course"
    },
    {
      "URL": "https://youtu.be/eILUmCJhl64",
      "Title": "React & Redux Complete Course (2024) with Projects | Notes | Free Certification"
    },
    {
      "URL": "https://youtu.be/lGmRnu--iU8",
      "Title": "Complete JavaScript Course + Notes for Beginners in Hindi"
    },
    {
      "URL": "https://youtu.be/H3XIJYEPdus",
      "Title": "From Zero to Full Stack: Master JavaScript and Create Dynamic Web Apps"
    },
    {
      "URL": "https://youtu.be/a7AxbqMjSuQ",
      "Title": "Full Python Course for Beginners in Hindi | Python Tutorial for Beginners"
    },
    {
      "URL": "https://youtu.be/wI4HWGlI6gM",
      "Title": "[[ 8.5 HOURS ]] Complete SQL End to End - SQL Server Tutorial { End to End } Full Course Beginners"
    },
    {
      "URL": "https://youtu.be/TO4aQ3ghFOc",
      "Title": "FastAPI Beyond CRUD Full Course - A FastAPI Course"
    },
    {
      "URL": "https://youtu.be/4dscVzCaXCU",
      "Title": "AWS EC2 Full Course | From Beginner to Expert | Deploy Real-Time Projects on AWS"
    },
    {
      "URL": "https://youtu.be/dz458ZkBMak",
      "Title": "React JS Full Course 2024 | 6+ Projects | 15 Hours"
    },
    {
      "URL": "https://youtu.be/mQnWCmVErnw",
      "Title": "Next.js Full Course 2024 | Learn Next.js 14 In One Video | 14 Hours"
    },
    {
      "URL": "https://youtu.be/u64gyCdqawU",
      "Title": "Android APP Development Full Course with PRACTICAL (41 Hours) | Learn App Development in 2024"
    },
    {
      "URL": "https://youtu.be/pmvEgZC55Cg",
      "Title": "Advanced MERN Auth Course: Email Verification, Password Recovery, and Welcome Emails"
    },
    {
      "URL": "https://youtu.be/FpfHmAkRVK4",
      "Title": "C++ A complete and modern course for beginners"
    },
    {
      "URL": "https://youtu.be/4DqAvWonPAg",
      "Title": "Complete react course with 10 projects"
    },
    {
      "URL": "https://youtu.be/lAFbKzO-fss",
      "Title": "React JS Full Course 2024"
    },
    {
      "URL": "https://youtu.be/ThKukf8i35U",
      "Title": "Mastering AWS : Complete Course with Real-Time Tasks in 15 Hours | PART - 1"
    },
    {
      "URL": "https://youtu.be/meLHByVrbOw",
      "Title": "Mastering AWS: Aws Full Course in 15 Hours Part 2 | #saikiranpinapathruni"
    },
    {
      "URL": "https://youtu.be/6SJQ5eOChrA",
      "Title": "Master REST APIs - The Beginner's Guide (Hands-on Tutorial) | Hindi"
    },
    {
      "URL": "https://youtu.be/tww-gbNPOcA",
      "Title": "Master MONGODB in ONE VIDEO: Beginner to Advanced Course For Beginners in Hindi | MPrashant"
    },
    {
      "URL": "https://youtu.be/6l8RWV8D-Yo",
      "Title": "10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi"
    },
    {
      "URL": "https://youtu.be/32DLasxoOiM",
      "Title": "Java Programming Full Tutorial in One Video (2024) | Java full course"
    }
  ];

  // Calculate pagination


  return (
    <Videos videos={videos} videolink={"/courses/videos"} playlistlink={"/courses/playlists"} />

  )


  // return (
  //   <>
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
  //                 status={card.status}
  //                 title={card.title}
  //                 description={card.description}
  //                 author={card.author}
  //                 url={card.url}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};

export default VideosPage;