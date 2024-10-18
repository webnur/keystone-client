"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LocationIcon from "@/components/icons/Location";

interface Program {
  title: string;
  institution: string;
  location: string;
  country: string;
  image: string;
  id: string; // Add id to link to dynamic page
}

interface NewlyAddedProgramsProps {
  programs?: Program[]; // Make programs optional
}

const MbaAddedProgram: React.FC<NewlyAddedProgramsProps> = ({ programs }) => {
  const defaultPrograms: Program[] = [
    {
      title: "Default Program 1",
      institution: "Default Institution 1",
      location: "Default Location 1",
      country: "Country 1",
      image: "https://via.placeholder.com/160",
      id: "default1",
    },
    {
      title: "Default Program 2",
      institution: "Default Institution 2",
      location: "Default Location 2",
      country: "Country 2",
      image: "https://via.placeholder.com/160",
      id: "default2",
    },
    {
      title: "Default Program 3",
      institution: "Default Institution 3",
      location: "Default Location 3",
      country: "Country 3",
      image: "https://via.placeholder.com/160",
      id: "default3",
    },
    {
      title: "Default Program 4",
      institution: "Default Institution 4",
      location: "Default Location 4",
      country: "Country 4",
      image: "https://via.placeholder.com/160",
      id: "default4",
    },
  ];

  const programData = programs && programs.length > 0 ? programs : defaultPrograms; // Use API data if available, else use default data
  const [currentIndex, setCurrentIndex] = useState(0);
  const programsToShow = 4;

  const next = () => {
    if (programData.length > programsToShow) {
      setCurrentIndex((prevIndex) =>
        prevIndex + programsToShow >= programData.length
          ? 0
          : prevIndex + programsToShow
      );
    }
  };

  const prev = () => {
    if (programData.length > programsToShow) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? programData.length - programsToShow
          : prevIndex - programsToShow
      );
    }
  };

  return (
    <section className="py-16 bg-white text-center w-11/12 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Newly Added Programs</h2>
      </div>

      <div className="relative">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(programsToShow, programData.length)} gap-4`}>
          {programData.slice(currentIndex, currentIndex + programsToShow).map((program, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
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
                <LocationIcon width="16" height="16" />
                {program.location}, {program.country}
              </p>
              <div className="flex justify-end">
                <Link href={`/mba/newly-added-program/${program.id}`}>
                  <span className="text-red-500 font-semibold hover:text-red-600 flex items-center">
                    More information <span className="ml-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {programData.length > programsToShow && (
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

export default MbaAddedProgram;
