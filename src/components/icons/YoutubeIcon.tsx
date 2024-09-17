import React from "react";

interface SvgIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const YoutubeIcon: React.FC<SvgIconProps> = ({
  width = "40", // Default width
  height = "40", // Default height
}) => {
  return (
    <svg
      fill="#ffffff"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
    </svg>
  );
};

export default YoutubeIcon;
