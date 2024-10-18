"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StudyLocation {
  id: string;  
  name: string;
  image: string;
}

interface WhereToStudyProps {
  locations: StudyLocation[];
}

const BachelorWhereToStudy: React.FC<WhereToStudyProps> = ({ locations }) => {
  return (
    <section className="py-16 bg-white text-center container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Where to study
        </h2>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
          See all locations
        </button>
      </div>

      {/* Grid of Study Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {locations.map((location) => (
          <div
            key={location.id}
            className="relative overflow-hidden group border-b-4 border-red-500 transition-all duration-500"
          >
            {/* Location Image */}
            <div className="w-[415px] h-[195px]">
              <Image
                src={location.image}
                alt={location.name}
                width={415}
                height={100}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Normal Condition Location Name */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-2 text-lg font-semibold text-gray-800 text-center transition-opacity duration-500 group-hover:opacity-0">
              {location.name}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* Location Name on Hover (Left Center) */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl font-semibold">
                {location.name}
              </div>

              {/* Read More Button (Centered Bottom) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Link href={`/bachelor/study-where/${location.id}`}>
                  <button className="bg-white bg-opacity-10 border-2 border-white text-white px-6 py-2 rounded-lg">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BachelorWhereToStudy;
