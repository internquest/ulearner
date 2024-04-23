/* eslint-disable @next/next/no-img-element */
"use client"
import SignupContainer from './ui/Signup/SignupContainer.jsx';

export default function Home() {


  return (
    <div className="flex min-h-screen relative pt-0">
      <a>
        <img
          className="h-9 top-6 left-6 lg:top-8 lg:left-8 flex items-center absolute"
          src="https://images.jumpstart.me/frontend/brand/brand-logo-combined.svg"
          alt=""
        />
      </a>
      <div className="bg-white posinitial lg:static w-auto lg:w-[65%] flex">
        <div className="flex flex-col max-w-[26rem] text-left w-auto m-auto px-6 pt-24 pb-11">
          <h1 className="text-5xl font-semibold text-[#0e0e0e] cambo-regular">Sign up</h1>
          <p className="my-4 text-[#0e0e0e] text-base font-normal">
            Join Untapped today and get hired by the world’s top tech and finance companies.
          </p>
          <p className="pb-6 text-sm leading-[150%] text-[#666] font-normal">
            Not a candidate?{' '}
            <a className="leading-[130%] text-[#3365e6] font-semibold" href="#">
              Sign up as a recruiter
            </a>
          </p>
          <button className="relative flex items-center justify-center px-4 py-[10px] bg-white border border-black min-w-28 rounded">
            <span className="absolute top-3 left-4 mr-2">
              <img className="h-4 w-4" src="https://images.jumpstart.me/frontend/icons/GoogleSSO.png" alt="" />
            </span>
            <span className="text-sm text-[#0e0e0e] font-semibold">Continue with Google</span>
          </button>

          <div className="flex items-center justify-center my-6">
            <div className="w-full border-t border-gray-300"></div>
            <div className="mx-4 text-[#666] text-sm font-normal">or</div>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <SignupContainer />

          <p className="mt-6 text-left text-[#666] text-sm font-normal leading-[150%]">
            Already have an Untapped account?{' '}
            <a href="#" className="text-[#3365e6] font-semibold underline">
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="bg-[#dadada] bgImage">{/* Optional content can go here */}</div>
    </div>
  );
}
