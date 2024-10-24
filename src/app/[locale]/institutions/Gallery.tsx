import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const images = [
"https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
"https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
"https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
"https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="object-cover w-full h-full"
            width={800}
            height={350}
          />
        </div>

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
              alt="gallery image"
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
