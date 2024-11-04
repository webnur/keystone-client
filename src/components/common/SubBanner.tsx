/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface BannerProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title?: string;
  slogan?: string;
  year?: string;
  className?: string;
  titleClass?: string;
  sloganClass?: string;
  style?: React.CSSProperties;
}

const SubBanner: React.FC<BannerProps> = ({
  backgroundImage,
  icon,
  title = "Default Title",
  slogan = "",
  year = "2025",
  className = "",
  titleClass = "",
  sloganClass = "",
  style = {},
}) => {
  return (
    <div
      className={`relative h-64 flex flex-col justify-center text-white ${className} p-4 sm:p-6 md:p-8`}
      style={{
        backgroundColor: backgroundImage ? "transparent" : "#333",
        ...style,
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
      )}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      )}

      <div className="relative z-10 text-left max-w-screen-lg">
        {icon && <div className="text-3xl mb-4">{icon}</div>}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${titleClass}`}>
          {title}{" "}
          <span className="font-serif text-xl sm:text-2xl md:text-3xl font-normal">{year}</span>
        </h1>
        <p className={`text-sm sm:text-base md:text-lg mt-2 ${sloganClass}`}>{slogan}</p>
      </div>
    </div>
  );
};

export default SubBanner;
