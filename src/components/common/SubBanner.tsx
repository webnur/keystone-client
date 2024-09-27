/* eslint-disable @next/next/no-img-element */
import React from "react";

interface BannerProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title?: string;
  slogan?: string;
  className?: string; // Allows for additional class names
  titleClass?: string;
  slogalClass?: string;
  style?: React.CSSProperties; // Allows for inline styles from the parent
}

const SubBanner: React.FC<BannerProps> = ({
  backgroundImage,
  icon,
  title = "Default Title", // Default title if none is provided
  slogan = "Default Slogan", // Default slogan if none is provided
  className = "",
  titleClass = "",
  slogalClass = "",
  style = {}, // Additional styles from parent
}) => {
  return (
    <div
      className={`relative h-80 flex flex-col justify-center items-center text-center text-white ${className}`}
      style={{
        backgroundColor: backgroundImage ? "transparent" : "#333", // Set background color if no image
        ...style, // Merge additional styles
      }}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      {/* Overlay for darkening the image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      )}

      <div className="relative z-10 flex flex-col justify-center items-center">
        {icon && <div className="text-6xl mb-4">{icon}</div>}
        <h1 className={`text-3xl font-bold ${titleClass}`}>{title}</h1>
        <p className={`text-lg ${slogalClass}`}>{slogan}</p>
      </div>
    </div>
  );
};

export default SubBanner;
