import ComparePrograms from "@/components/compare-program/ComparePrograms";
import React from "react";

const page = () => {
  return (
    <div>
      <ComparePrograms />
      <div>
        {" "}
        <div className="flex flex-col items-center justify-center h-[400px] text-center">
          <p className="text-[1.5rem] text-gray-700 mb-4">
            You have not yet added any programs to your compared programs.
          </p>
          <p className=" text-gray-600 mb-8 text-[1.5rem]">
            Please have a look at our program listings and click the compare
            icon to add them to this list.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Find programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
