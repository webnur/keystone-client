"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import SubBanner from "@/components/common/SubBanner";
import Image from "next/image";

const SavedPrograms = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [savedPrograms, setSavedPrograms] = useState<any[]>([]); // For storing programs from API or localStorage

  // Function to fetch saved programs from API or localStorage
  const fetchSavedPrograms = async () => {
    try {
      const apiAvailable = await checkApiAvailability();

      if (apiAvailable) {
        // Fetch saved programs from API
        const response = await fetch("/api/savedPrograms");
        const data = await response.json();
        setSavedPrograms(data);
      } else {
        // Fetch saved programs from localStorage
        const localSavedPrograms = JSON.parse(
          localStorage.getItem("savedPrograms") || "[]"
        );
        setSavedPrograms(localSavedPrograms);
      }
    } catch (error) {
      console.error("Error fetching saved programs:", error);
    }
  };

  // Mock function to simulate API availability check
  const checkApiAvailability = async () => {
    try {
      const response = await fetch("/api/check");
      return response.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    fetchSavedPrograms(); // Fetch programs on component mount
  }, []);

  return (
    <div>
      {/* Reusable Banner */}
      <SubBanner
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
                <h3 className="text-xl font-bold">{program.title}</h3>
                <p className="text-gray-600">{program.institution}</p>
                <p className="text-gray-600">
                  {program.location}, {program.country}
                </p>
                <div className="relative w-full h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SavedPrograms;
