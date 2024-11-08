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
    <div className="relative border border-gray-300 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4 my-6 w-full">
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-lg text-gray-400 hover:text-red-500 focus:outline-none z-10"
      >
        {isFavorited ? "❤️" : "🤍"}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/3 relative mb-4 md:mb-0 flex-shrink-0">
          <div className="relative h-40 md:h-52 bg-cover bg-center rounded-lg overflow-hidden">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src={imageUrl}
              alt={title}
              width={200}
              height={160}
            />
            {recommended && (
              <div className="absolute bottom-2 left-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-lg flex items-center">
                <FaRegGem className="mr-1" /> Featured
              </div>
            )}
            {/* Logo Section - Updated */}
            <div className="absolute inline-flex min-w-[140px] max-w-[140px] justify-center bg-white top-2 left-2 rounded-lg p-1 h-14">
              <div className="relative w-full h-full p-3">
                <Image
                  src={logo}
                  alt={`${institution} logo`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 flex flex-col space-y-2 md:pl-4">
          <p className="text-gray-700 font-semibold text-sm">{institution}</p>
          <h3 className="text-lg md:text-xl font-bold text-red-700">{title}</h3>
          <p className="text-gray-500 text-sm">
            {location}, {country}
          </p>

          <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-600 font-semibold mt-2 mb-4">
            <p className="flex items-center space-x-1">
              <span aria-label="Degree type">🎓</span>
              <span>{degreeType}</span>
            </p>
            <span>•</span>
            <p className="flex items-center space-x-1">
              <span aria-label="Study pace">🕒</span>
              <span>{studyMode}</span>
            </p>
            <span>•</span>
            <p className="flex items-center space-x-1">
              <span aria-label="Duration">⏳</span>
              <span>{duration}</span>
            </p>
            <span>•</span>
            <p className="flex items-center space-x-1">
              <span aria-label="Language">🌐</span>
              <span>{language}</span>
            </p>
          </div>

          <p className="text-gray-700 text-sm line-clamp-2 border-l-2 border-gray-300 pl-3">
            {description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500 text-xs">
              Application Period: {applicationTime} - {applicationDeadline}
            </p>
          </div>
          <div className="md:text-right">
            <Link
              href={{
                pathname: `/mba/program-details/${id}`,
                query: { logo },
              }}
              className="text-red-700 text-sm underline font-semibold"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
