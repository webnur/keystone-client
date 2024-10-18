/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface BannerProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title?: string;
  slogan?: string;
  className?: string;
  titleClass?: string;
  slogalClass?: string;
  style?: React.CSSProperties;
}

const SubBanner: React.FC<BannerProps> = ({
  backgroundImage,
  icon,
  title = "Default Title",
  slogan = "",
  className = "",
  titleClass = "",
  slogalClass = "",
  style = {},
}) => {
  return (
    <div
      className={`relative h-80 flex flex-col justify-center items-center text-center text-white ${className} p-2`}
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

      <div className="relative z-10 flex flex-col justify-center items-center">
        {icon && <div className="text-6xl mb-4">{icon}</div>}
        <h1 className={`text-3xl font-bold ${titleClass}`}>{title}</h1>
        <p className={`text-lg ${slogalClass}`}>{slogan}</p>
      </div>
    </div>
  );
};

export default SubBanner;
