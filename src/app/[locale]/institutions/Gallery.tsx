import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative w-full h-96 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Next and Previous Buttons */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
        >
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`border ${currentIndex === idx ? 'border-red-500' : 'border-gray-300'}`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-16 h-16 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
