"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// types.ts
interface IScholarships {
  id: number;
  title: string;
  description: string;
  deadline: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}
interface ScholarshipCardProps {
  scholarships: IScholarships[]; // Expect an array of scholarships
}

const ScholarShipsCard = ({ scholarships }: ScholarshipCardProps) => {
  return (
    <>
      {scholarships.map((scholarship) => (
        <div
          key={scholarship.id}
          className="container mx-auto p-8 bg-white shadow-2xl rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 my-10"
        >
          {/* Left Section: Image */}
          <div className="flex-shrink-0">
            <Image
              className="w-48 h-auto object-contain"
              src={scholarship.imageUrl} // Replace with your image URL
              alt="Scholarship Badge"
              width={200}
              height={200}
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 pb-8">
              {scholarship.title}
            </h2>
            <p className="text-gray-600 py-4">
              Are you an international graduate student looking for scholarships
              to study in the USA?
            </p>
            <p className="text-gray-600">{scholarship.description}</p>
            <p className="text-gray-600 pt-4">
              Apply by{" "}
              <strong className="text-black">{scholarship.deadline}</strong> for
              the educations.com Graduate Study in the USA Scholarship and get
              one step closer to your next big adventure!
            </p>
          </div>

          {/* Button Section */}
          <div className="flex-shrink-0">
            <Link
              href={scholarship.buttonLink}
              className="inline-block px-6 py-3 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Apply here
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScholarShipsCard;
