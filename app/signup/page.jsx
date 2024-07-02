/* eslint-disable @next/next/no-img-element */
import SignupContainer from "@/app/ui/Signup/SignupContainer.jsx";

const Signup = () => {
  return (
    <div className="relative flex min-h-screen pt-0">
      <a>
        <img
          className="absolute left-6 top-6 flex h-9 items-center lg:left-8 lg:top-8"
          src="https://images.jumpstart.me/frontend/brand/brand-logo-combined.svg"
          alt=""
        />
      </a>
      <div className="posinitial flex w-auto bg-white lg:static lg:w-[65%]">
        <div className="m-auto flex w-auto max-w-[26rem] flex-col px-6 pb-11 pt-24 text-left">
          <h1 className="cambo-regular text-5xl font-semibold text-[#0e0e0e]">
            Sign up
          </h1>
          <p className="my-4 text-base font-normal text-[#0e0e0e]">
            Join Untapped today and get hired by the world’s top tech and
            finance companies.
          </p>
          <p className="pb-6 text-sm font-normal leading-[150%] text-[#666]">
            Not a candidate?{" "}
            <a className="font-semibold leading-[130%] text-[#3365e6]" href="#">
              Sign up as a recruiter
            </a>
          </p>
          <button className="relative flex min-w-28 items-center justify-center rounded border border-black bg-white px-4 py-[10px]">
            <span className="absolute left-4 top-3 mr-2">
              <img
                className="h-4 w-4"
                src="https://images.jumpstart.me/frontend/icons/GoogleSSO.png"
                alt=""
              />
            </span>
            <span className="text-sm font-semibold text-[#0e0e0e]">
              Continue with Google
            </span>
          </button>

          <div className="my-6 flex items-center justify-center">
            <div className="w-full border-t border-gray-300"></div>
            <div className="mx-4 text-sm font-normal text-[#666]">or</div>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <SignupContainer />

          <p className="mt-6 text-left text-sm font-normal leading-[150%] text-[#666]">
            Already have an Untapped account?{" "}
            <a href="#" className="font-semibold text-[#3365e6] underline">
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="bgImage bg-[#dadada]">
        {/* Optional content can go here */}
      </div>
    </div>
  );
};

export default Signup;
