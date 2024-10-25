"use client";
import React, { useState } from "react";
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
    <div className="w-60 fixed right-4 top-34">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt={institution} width={150} height={150} />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleSave}
            className={`p-2 border rounded-lg font-semibold hover:bg-gray-100 transition duration-300 ${
              isSaved ? "bg-green-100 text-green-600" : "bg-white text-black"
            }`}
          >
            {isSaved ? "Saved" : "Save"}
          </button>

          <button className="p-2 border rounded-lg bg-white hover:bg-gray-100 font-semibold">
            Compare
          </button>

          <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
            Contact school
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
