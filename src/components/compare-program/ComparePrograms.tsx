import Image from "next/image";
import programImage from "../../../public/images/compare-program/compare-program.jpg";
import CustomIcon from "../icons/CustomIcon";

export default function ComparePrograms() {
  return (
    <div className="relative h-[400px]">
      {/* Background Image */}
      <Image
        src={programImage} // Replace with your image path
        alt="Compare Programs"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Icon */}
        <div className="mb-4">
          <CustomIcon />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Compare Programs</h1>

        {/* Subtitle */}
        <p className="max-w-lg">
          Compare programs side by side to find the right one for you. Add up to
          4 programs to compare duration, costs, and requirements.
        </p>
      </div>
    </div>
  );
}
