import Image from "next/image";
import React from "react";

const Institutions = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co.com/kQ9BHmg/240733-Screenshot2024-10-04150049.jpg" // Correct image path
            alt="Ponce Health Sciences University"
            layout="fill"
            objectFit="cover"
            className="opacity-45"
          />
          {/* Background Color Overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-45"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center p-8 md:p-16">
          <div className="text-white">
            {/* Breadcrumb */}
            <p className="text-sm mb-4">
              <span className="text-gray-400">Home</span> &gt; USA &gt;{" "}
              <span>Ponce Health Sciences University</span>
            </p>

            {/* Main Title */}
            <h1 className="text-4xl font-bold mb-4">
              Ponce Health Sciences University
            </h1>

            {/* Button */}
            <button className="px-6 py-2 mt-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition">
              See all programs
            </button>
          </div>

          {/* Right Logo */}
          <div className="absolute top-8 right-8 hidden lg:block">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="https://i.ibb.co.com/N2yTms6/240732-Screenshot2024-10-04150122.jpg" // Correct logo path
                alt="PHSU Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Right Copyright Text */}
        <div className="absolute bottom-4 right-4 text-white text-sm">
          © Ponce Health Sciences University
        </div>
      </div>
    </div>
  );
};

export default Institutions;
