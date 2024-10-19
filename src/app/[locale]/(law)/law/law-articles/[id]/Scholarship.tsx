"use client";

import Image from "next/image";
import Link from "next/link";

export default function Scholarship() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="#" className="hover:text-red-600">
            Articles
          </Link>{" "}
          &gt;
          <Link href="#" className="hover:text-red-600">
            Masters Scholarships Directory For International Students
          </Link>
        </nav>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Masters Scholarships Directory for International Students
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Here are some of the best Masters scholarships you can apply for in
          different study abroad countries.
        </p>
        <p className="text-sm text-gray-500">
          Aug 5, 2024 &nbsp; • &nbsp;
          <Link href="#" className="text-red-600 hover:underline">
            Study Abroad
          </Link>{" "}
          &nbsp; • &nbsp;
          <Link href="#" className="text-red-600 hover:underline">
            Student Tips
          </Link>
        </p>
        <div className="mt-8">
          <div className="relative w-full h-64">
            <Image
              src="https://i.ibb.co.com/CbgWHWY/126297-photo-1477238134895-98438ad85c30.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
