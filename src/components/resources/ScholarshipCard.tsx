import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the interfaces
interface IScholarship {
  id: number; // Ensure it's a number, not a string
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ScholarshipProps {
  scholarships: IScholarship[]; // Expect an array of scholarships
}

const ScholarshipCard = ({ scholarships }: ScholarshipProps) => {
  return (
    <div>
      {scholarships.map((scholarship) => (
        <div
          key={scholarship.id}
          className="container mx-auto p-4 bg-white shadow-md rounded-lg flex items-center space-x-4 my-10 py-5 "
        >
          <div className="flex-shrink-0">
            <Image
              className="w-[350px] h-[200px] object-cover rounded-md"
              src={scholarship.imageUrl}
              alt={scholarship.title}
              width={350}
              height={220}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {scholarship.title}
            </h2>
            <p className="text-gray-600 py-4">{scholarship.description}</p>
          </div>
          <div>
            <Link
              href={scholarship.link}
              className="inline-block px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipCard;
