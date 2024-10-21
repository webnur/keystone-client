import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "https://i.ibb.co.com/qrdZqM0/240869-St-Louis-Campus-MSMSremote-inperson.jpg",
    "https://i.ibb.co.com/6wMKLJD/240870-Ponce-90-v1a-00-01-26-20-Still0181.jpg",
    "https://i.ibb.co.com/hmXHfTf/240873-Ponce-90-v1a-00-00-56-12-Still0251.jpg",
    "https://i.ibb.co.com/K2DDCkz/240874-Ponce-30-v2a-00-00-20-14-Still009.jpg",
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="object-cover w-full h-full"
            width={800}
            height={350}
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
            className={`border ${
              currentIndex === idx ? "border-red-500" : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={64} // 16 * 4 = 64px
              height={64} // 16 * 4 = 64px
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
