import React from "react";

interface SvgIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const LocationIcon: React.FC<SvgIconProps> = ({
  width = "24",
  height = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 9.88 9.12 14.19 7 16.88C4.92 14.21 2 9.85 2 7ZM4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C7.89316 4.5 8.71848 4.9765 9.16506 5.75C9.61165 6.5235 9.61165 7.4765 9.16506 8.25C8.71848 9.0235 7.89316 9.5 7 9.5C5.61929 9.5 4.5 8.38071 4.5 7Z"
        fill="black"
      ></path>
    </svg>
  );
};

export default LocationIcon;
