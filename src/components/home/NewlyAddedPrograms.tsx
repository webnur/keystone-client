"use client";
import React, { useState } from "react";
import LocationIcon from "../icons/Location";
import Link from "next/link";
import Image from "next/image";

interface Program {
  title: string;
  institution: string;
  location: string;
  country: string;
  image: string;
  link?: string; // Make link optional
}

interface NewlyAddedProgramsProps {
  programs: Program[];
}

const NewlyAddedPrograms: React.FC<NewlyAddedProgramsProps> = ({
  programs,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const programsToShow = 4;

  // Only slide if there are more than 4 programs
  const next = () => {
    if (programs.length > programsToShow) {
      setCurrentIndex((prevIndex) =>
        prevIndex + programsToShow >= programs.length
          ? 0
          : prevIndex + programsToShow
      );
    }
  };

  const prev = () => {
    if (programs.length > programsToShow) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? programs.length - programsToShow
          : prevIndex - programsToShow
      );
    }
  };

  return (
    <section className="py-16 bg-white text-center w-11/12 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Newly added Programs</h2>
      </div>

      <div className="relative">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(programsToShow, programs.length)} gap-4`}>
          {programs
            .slice(currentIndex, currentIndex + programsToShow)
            .map((program, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image positioned top-left */}
                <div className="flex justify-start w-full mb-4">
                  <Image
                    src={program.image}
                    alt={program.institution}
                    className="object-contain w-32 h-32"
                    width={160}
                    height={100}
                  />
                </div>

                <h3 className="text-lg font-semibold text-black text-left">
                  {program.title}
                </h3>
                <p className="text-sm text-black text-left underline font-semibold">
                  {program.institution}
                </p>
                <p className="text-sm text-black flex items-center mt-3">
                  <span className="material-icons-outlined mr-1">
                    <LocationIcon width="16" height="16" />
                  </span>
                  {program.location}, {program.country}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={program.link ? program.link : "#"} // Use "#" as a fallback link
                    className="text-red-500 font-semibold hover:text-red-600 flex items-center"
                  >
                    More information <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Only show the carousel buttons if there are more than 4 items */}
        {programs.length > programsToShow && (
          <div className="flex justify-center mt-6">
            <button
              onClick={prev}
              className="bg-white border border-black px-4 py-2 rounded-lg shadow hover:bg-gray-100 mx-2 text-black font-semibold"
            >
              &lt;
            </button>
            <button
              onClick={next}
              className="bg-white border border-black px-4 py-2 rounded-lg shadow hover:bg-gray-100 mx-2 text-black font-semibold"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewlyAddedPrograms;
