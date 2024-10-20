import React from "react";
import Discover from "../icons/Discover";

const EducationJourney = () => {
  return (
    <section className="py-16 bg-white text-center w-4/5 mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Start your education journey here
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Discover */}
        <div className="flex flex-col items-center z-10 w-full">
          <div className="rounded-full p-6 border-2 border-gray-300 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11a4 4 0 118 0 4 4 0 01-8 0zM8 11V8m4 11a7 7 0 100-14 7 7 0 000 14zm-5.2-7h.01M17.2 11h-.01M12 18h-.01M12 6h.01"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Discover</h3>
          <p className="text-gray-500 mt-2 w-3/5 mx-auto">
            Browse thousands of degrees from around the world
          </p>

          {/* <div className='h-[1px] bg-red-400 w-[191px] absolute top-1/4 right-[-96px]'></div> */}
        </div>

        {/* Compare */}
        <div className="flex flex-col items-center z-10 w-full ">
          <div className="rounded-full p-6 border-2 border-gray-300 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18m-6 5h6"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold">Compare</h3>
          <p className="text-gray-500 mt-2 w-3/5 mx-auto">
            See programs side by side to find the right one for you
          </p>
          {/* <div className='h-[1px] bg-red-400 w-[191px] absolute top-1/4 right-[-96px]'></div> */}
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center z-10 w-full">
          <div className="rounded-full p-6 border-2 border-gray-300 bg-white">
            <Discover width="40" height="40" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Connect</h3>
          <p className="text-gray-500 mt-2 w-3/5 mx-auto">
            Contact the schools admissions offices directly
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
