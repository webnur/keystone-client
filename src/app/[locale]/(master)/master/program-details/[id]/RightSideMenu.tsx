"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface RightSidebarProps {
  logo: string;
  institution: string;
  programId: string;
}

const RightSideMenu: React.FC<RightSidebarProps> = ({
  logo,
  institution,
  programId,
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const savedPrograms = JSON.parse(
      localStorage.getItem("savedPrograms") || "[]"
    );
    setIsSaved(savedPrograms.includes(programId));
  }, [programId]);

  const handleSave = () => {
    const savedPrograms = JSON.parse(
      localStorage.getItem("savedPrograms") || "[]"
    );
    if (!savedPrograms.includes(programId)) {
      savedPrograms.push(programId);
      localStorage.setItem("savedPrograms", JSON.stringify(savedPrograms));
      setIsSaved(true);
    }
  };

  return (
    <div className="sticky top-20 w-60 max-w-full">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 mb-8">
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt={institution}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleSave}
            className={`p-3 rounded-lg font-semibold transition-colors duration-300 ${
              isSaved
                ? "bg-green-100 text-green-600 border border-green-300"
                : "bg-white text-black border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {isSaved ? "Saved" : "Save"}
          </button>

          <button className="p-3 rounded-lg font-semibold border border-gray-300 bg-white hover:bg-gray-100 transition-colors duration-300">
            Compare
          </button>

          <button className="p-3 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors duration-300">
            Contact School
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
