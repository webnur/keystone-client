import React from 'react';

interface BannerProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title?: string;
  slogan?: string;
  className?: string; // Allows for additional class names
  style?: React.CSSProperties; // Allows for inline styles from the parent
}

const SubBanner: React.FC<BannerProps> = ({
  backgroundImage,
  icon,
  title = 'Default Title', // Default title if none is provided
  slogan = 'Default Slogan', // Default slogan if none is provided
  className = '',
  style = {}, // Additional styles from parent
}) => {
  return (
    <div
      className={`h-80 bg-gray-100 flex flex-col justify-center items-center text-center text-white ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style, // Merge additional styles
      }}
    >
      {icon && <div className="text-6xl mb-4">{icon}</div>}
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">{slogan}</p>
    </div>
  );
};

export default SubBanner;
