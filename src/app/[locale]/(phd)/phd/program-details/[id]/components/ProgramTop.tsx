import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaGlobe, FaMoneyBillWave, FaBookOpen } from 'react-icons/fa';

interface ProgramTopSectionProps {
  id: string;
  imageUrl: string;
  institution: string;
  title: string;
  location: string;
  duration: string;
  languages: string;
  pace: string;
  startDate: string;
  tuitionFees: string;
  studyFormat: string;
}

const ProgramTop: React.FC<ProgramTopSectionProps> = ({
  id,
  imageUrl,
  institution,
  title,
  location,
  duration,
  languages,
  pace,
  startDate,
  tuitionFees,
  studyFormat,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={300}
        className="w-full h-56 object-cover rounded-lg mb-6"
      />

      <div className="text-lg font-semibold text-gray-500 mb-1">
        <Link href={`/master/institutions/${id}`} className="text-blue-600 hover:underline">
          {institution}
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-1">{title}</h1>

      <div className="flex items-center text-gray-600 text-lg mb-6">
        <span className="font-bold mr-2">{studyFormat}</span> | <span className="ml-2">{location}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm text-gray-700 mt-4">
        <div className="flex items-center space-x-2">
          <FaClock className="text-gray-500" />
          <span className="font-semibold">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaGlobe className="text-gray-500" />
          <span className="font-semibold">Languages:</span>
          <span>{languages}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-gray-500" />
          <span className="font-semibold">Pace:</span>
          <span>{pace}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-500" />
          <span className="font-semibold">Start Date:</span>
          <span>{startDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMoneyBillWave className="text-gray-500" />
          <span className="font-semibold">Tuition Fees:</span>
          <span>{tuitionFees}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaBookOpen className="text-gray-500" />
          <span className="font-semibold">Study Format:</span>
          <span>{studyFormat}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramTop;
