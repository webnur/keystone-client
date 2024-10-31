import Image from "next/image";
import Link from "next/link";
import React from "react";

const GraduateSchoolInsights = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="#" className="hover:text-red-600">
            Articles
          </Link>{" "}
          &gt;{" "}
          <Link href="#" className="hover:text-red-600">
            Graduate School Application Trends - Insights From Boston University
          </Link>
        </nav>

        {/* Title and Description */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Graduate School Application Trends - Insights From Boston University
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Perfect your graduate school application with these tips from an
          industry expert.
        </p>

        {/* Date and Tags */}
        <p className="text-sm text-gray-500 mb-6">
          Apr 10, 2024 •{" "}
          <Link href="#" className="text-red-600 hover:underline">
            Student Tips
          </Link>{" "}
          •{" "}
          <Link href="#" className="text-red-600 hover:underline">
            Education
          </Link>{" "}
          •{" "}
          <Link href="#" className="text-red-600 hover:underline">
            Study Abroad
          </Link>
        </p>

        {/* Main Image */}
        <div className="rounded-lg shadow-lg overflow-hidden mb-8">
          <Image
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Boston University - Building entrance"
            width={870} // Adjusted width based on provided image
            height={212} // Adjusted height based on provided image
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GraduateSchoolInsights;
