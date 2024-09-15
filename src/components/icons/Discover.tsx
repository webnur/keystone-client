import React from 'react';

interface SvgIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const Discover: React.FC<SvgIconProps> = ({
  width = '24', // Default width
  height = '24', // Default height
  className = 'text-gray-600', // Default class for styling
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12h.01M12 16h.01M8 12h.01M12 8h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2 21 6.477 21 12z"
      />
    </svg>
  );
};

export default Discover;
