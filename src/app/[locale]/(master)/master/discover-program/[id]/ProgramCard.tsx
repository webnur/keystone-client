import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegGem } from 'react-icons/fa';

interface ProgramCardProps {
  id: number;
  title: string;
  institution: string;
  location: string;
  duration: string;
  mode: string;
  language: string;
  recommended?: boolean;
  imageUrl: string;
  description: string;
  logo: string; // Add logo here
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  institution,
  location,
  duration,
  mode,
  language,
  recommended = false,
  imageUrl,
  description,
  logo, // Add logo prop
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (savedFavorites.includes(id)) {
      setIsFavorited(true);
    }
  }, [id]);

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = savedFavorites.filter((favId: number) => favId !== id);
    } else {
      updatedFavorites = [...savedFavorites, id];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="border rounded-lg bg-white shadow hover:shadow-md transition relative flex items-start p-4">
      <div className="w-1/4 h-auto mr-4">
        <Image src={imageUrl} alt={title} width={160} height={100} objectFit="cover" />
        {recommended && (
          <div className="bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded mt-2 flex items-center">
            <FaRegGem className="mr-1" /> Featured
          </div>
        )}
      </div>

      <div className="w-3/4 relative">
        <h3 className="text-xl font-bold text-red-600 mb-1">{title}</h3>
        <p className="text-gray-700 mb-1">{institution}</p>
        <p className="text-gray-500 mb-2">{location}</p>

        <div className="flex flex-wrap space-x-4 text-sm text-gray-500 mb-4">
          <p>🎓 MSc</p>
          <p>🕒 {mode}</p>
          <p>⏳ {duration}</p>
          <p>🌐 {language}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 border-l-2 border-gray-200 pl-1">{description}</p>

        <Link
          href={{
            pathname: `/master/program-details/${id}`,
            query: { logo }, // Pass the logo through query parameters
          }}
          className="text-red-500 text-sm font-semibold hover:underline absolute bottom-2 right-2"
        >
          Read more
        </Link>

        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 text-lg text-gray-500 hover:text-red-500 focus:outline-none"
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
