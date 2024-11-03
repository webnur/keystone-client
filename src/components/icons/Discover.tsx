import React from 'react';

interface SvgIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const Discover: React.FC<SvgIconProps> = ({
  width = '24', 
  height = '24', 
  className = 'text-gray-600',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      width={width}
      height={height}
      className={className}
    >
      {/* Circle for the head */}
      <circle cx="12" cy="8" r="4" />

      {/* Ellipse for the body */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 20c0-2.21-1.79-4-4-4s-4 1.79-4 4"
      />
    </svg>
  );
};

export default Discover;
