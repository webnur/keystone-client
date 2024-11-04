/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegGem } from "react-icons/fa";

interface ProgramCardProps {
  id: number;
  title: string;
  institution: string;
  location: string;
  country: string;
  degreeType: string;
  subject: string;
  duration: string;
  studyMode: string;
  locationType: string;
  language: string;
  applicationTime: string;
  applicationDeadline: string;
  recommended?: boolean;
  imageUrl: string;
  description: string;
  logo: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  institution,
  location,
  country,
  degreeType,
  subject,
  duration,
  studyMode,
  locationType,
  language,
  applicationTime,
  applicationDeadline,
  recommended = false,
  imageUrl,
  description,
  logo,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (savedFavorites.includes(id)) {
      setIsFavorited(true);
    }
  }, [id]);

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = savedFavorites.filter((favId: number) => favId !== id);
    } else {
      updatedFavorites = [...savedFavorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 relative flex flex-col md:flex-row p-4 items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/4 relative mb-4 md:mb-0 md:mr-4">
        <Image
          className="rounded-lg w-full md:w-40"
          src={imageUrl}
          alt={title}
          width={160}
          height={100}
          objectFit="cover"
        />
        {recommended && (
          <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded absolute top-2 left-2 flex items-center">
            <FaRegGem className="mr-1" /> Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/4 relative flex flex-col">
        <h3 className="text-lg font-bold text-red-600 mb-1">{title}</h3>
        <p className="text-gray-800 font-medium mb-1">{institution}</p>
        <p className="text-gray-500 text-sm mb-3">
          {location}, {country}
        </p>

        <div className="flex flex-wrap space-x-2 text-xs text-gray-600 mb-4">
          <p className="flex items-center">
            🎓 {degreeType} in {subject}
          </p>
          <p className="flex items-center">🕒 {studyMode}</p>
          <p className="flex items-center">⏳ {duration}</p>
          <p className="flex items-center">🌐 {language}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 border-l-2 border-gray-300 pl-3">
          {description}
        </p>

        <p className="text-gray-500 text-xs mb-2">
          Application Period: {applicationTime} - {applicationDeadline}
        </p>

        <Link
          href={{
            pathname: `/master/program-details/${id}`,
            query: { logo },
          }}
          className="text-red-500 text-sm font-semibold hover:underline mt-auto"
        >
          Read more
        </Link>

        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 text-lg text-gray-400 hover:text-red-500 focus:outline-none"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
