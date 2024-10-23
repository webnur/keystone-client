import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProgramCardProps {
  id: number;
  title: string;
  institution: string;
  location: string;
  duration: string;
  mode: string;
  language: string;
  recommended?: boolean;
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
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition relative">
      {recommended && (
        <div className="text-red-500 text-sm font-semibold mb-2">Recommended</div>
      )}
      <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{institution}</p>
      <p className="text-gray-500">{location}</p>
      <div className="flex space-x-4 mt-2">
        <p className="text-gray-500">📅 {duration}</p>
        <p className="text-gray-500">🏫 {mode}</p>
        <p className="text-gray-500">🌐 {language}</p>
      </div>
      <Link href="#" className="text-red-500 mt-4 inline-block hover:underline">Read more</Link>
      <button onClick={toggleFavorite} className="absolute top-4 right-4">
        {isFavorited ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default ProgramCard;