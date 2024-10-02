"use client";
import React, { useState } from "react";
import LocationIcon from "../icons/Location";
import Link from "next/link";

interface Program {
  title: string;
  institution: string;
  location: string;
  country: string;
  image: string;
}

interface NewlyAddedProgramsProps {
  programs: Program[];
}

const NewlyAddedPrograms: React.FC<NewlyAddedProgramsProps> = ({
  programs,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const programsToShow = 4; // Number of programs to show at a time

  // Navigate to the next set of programs
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + programsToShow >= programs.length
        ? 0
        : prevIndex + programsToShow
    );
  };

  // Navigate to the previous set of programs
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? programs.length - programsToShow
        : prevIndex - programsToShow
    );
  };

  return (
    <section className="py-16 bg-white text-center w-11/12 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Newly added Programs</h2>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs
            .slice(currentIndex, currentIndex + programsToShow)
            .map((program, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                {/* Program Institution Logo */}
                <img
                  src={program.image}
                  alt={program.institution}
                  className="flex justify-start w-3/5 object-contain mb-4"
                />
                {/* Program Details */}
                <h3 className="text-lg font-semibold text-black text-left ">
                  {program.title}
                </h3>
                <p className="text-sm text-black text-left underline font-semibold ">
                  {program.institution}
                </p>
                <p className="text-sm text-black flex items-center mt-3">
                  <span className="material-icons-outlined mr-1">
                    <LocationIcon width="16" height="16" />
                  </span>
                  {program.location}, {program.country}
                </p>
                {/* More Information Button */}
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-red-500 font-semibold hover:text-red-600 flex items-center"
                  >
                    More information <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Carousel Buttons (Below the cards) */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prev}
            className="bg-white border border-gray-300 px-3 py-2 rounded-xl shadow hover:bg-gray-100 mx-2 text-black font-semibold"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="bg-white border border-gray-300 px-3 py-2 rounded-xl shadow hover:bg-gray-100 mx-2 text-black font-semibold"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedPrograms;
