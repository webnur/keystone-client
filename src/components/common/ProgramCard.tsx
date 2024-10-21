import React from 'react';
import Image from 'next/image';

interface ProgramCardProps {
  title: string;
  institution: string;
  location: string;
  duration: string;
  mode: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  institution,
  location,
  duration,
  mode,
}) => {
  return (
    <div className="border p-4 mb-4 shadow-sm flex">
      {/* Replace with the image for the university */}
      <div className="mr-4">
        <div className="relative w-24 h-24">
          <Image
            src="https://via.placeholder.com/100x100"
            alt={institution}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-red-600">{title}</h3>
        <p className="text-gray-600">{institution}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500">
          {duration} • {mode}
        </p>
        <a href="#" className="text-red-500 mt-2 inline-block">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
