"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProgramData {
  title: string;
  description: string;
  location: string;
  country: string;
  image: string;
}

interface RightSidebarProps {
  logo: string;
  institution: string;
  programId: string;
  programData: ProgramData; // Program details type
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  logo,
  institution,
  programId,
  programData,
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Save program to localStorage or API
  const handleSave = async () => {
    try {
      const apiAvailable = await checkApiAvailability();

      if (apiAvailable) {
        // Save to API
        const response = await fetch("/api/saveProgram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ programId, programData }),
        });

        if (response.ok) {
          setIsSaved(true);
          console.log("Program saved to API.");
        }
      } else {
        // Save to localStorage
        const savedPrograms =
          JSON.parse(localStorage.getItem("savedPrograms") || "[]");

        if (!savedPrograms.some((program: ProgramData) => program.title === programData.title)) {
          savedPrograms.push(programData);
          localStorage.setItem("savedPrograms", JSON.stringify(savedPrograms));
          setIsSaved(true);
          console.log("Program saved to localStorage.");
        }
      }
    } catch (error) {
      console.error("Error saving program:", error);
    }
  };

  const checkApiAvailability = async () => {
    try {
      const response = await fetch("/api/check");
      return response.ok;
    } catch {
      return false;
    }
  };

  return (
    <div className="w-60 fixed right-4 top-34">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-4">
        {/* University Logo */}
        <div className="flex justify-center mb-4">
          <Image src={logo} alt={institution} width={150} height={150} />
        </div>

        {/* Save, Compare, and Contact Buttons */}
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

export default RightSidebar;
