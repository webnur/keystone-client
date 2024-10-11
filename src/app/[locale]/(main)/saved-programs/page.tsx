"use client";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import SubBanner from "@/components/common/SubBanner";

const SavedPrograms = () => {
  // Mock saved programs data (you can replace this with actual data)
  const [savedPrograms, setSavedPrograms] = useState<any[]>([]); // Empty array for now

  return (
    <div>
      {/* Reusable Banner */}
      <SubBanner
        // backgroundImage="https://example.com/banner-image.jpg" // replace with actual image

        icon={<AiOutlineHeart />} // Use the heart icon
        title="Saved programs"
        slogan="Create a StudentHub account or sign in to save this program list."
        className="bg-gray-500"
      />

      {/* Display saved programs or message if none */}
      <section className="py-16 text-center p-2">
        {savedPrograms.length === 0 ? (
          <div className="text-gray-700">
            <p className="text-lg">
              You have not yet added any programs to your saved programs.
            </p>
            <p className="mt-2 mb-8">
              Please have a look at our program listings and click the heart
              icon to save them to this list.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
              Find programs
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPrograms.map((program, index) => (
              <div key={index} className="border rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SavedPrograms;
