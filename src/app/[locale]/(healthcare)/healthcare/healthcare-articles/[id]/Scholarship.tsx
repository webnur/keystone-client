"use client";
import Image from "next/image";

export default function Scholarship() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-red-600">Articles</a> &gt; 
          <a href="#" className="hover:text-red-600">Master's Scholarships Directory For International Students</a>
        </nav>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Master's Scholarships Directory for International Students
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Here are some of the best Master's scholarships you can apply for in different study abroad countries.
        </p>
        <p className="text-sm text-gray-500">
          Aug 5, 2024 &nbsp; • &nbsp; 
          <a href="#" className="text-red-600 hover:underline">Study Abroad</a> &nbsp; • &nbsp; 
          <a href="#" className="text-red-600 hover:underline">Student Tips</a>
        </p>
        <div className="mt-8">
          <Image 
            src="/path-to-your-image.jpg" 
            alt="Scholarship" 
            className="rounded-lg shadow-lg w-full h-64 object-cover"
            width={800}
            height={256}
          />
        </div>
      </div>
    </section>
  );
}
