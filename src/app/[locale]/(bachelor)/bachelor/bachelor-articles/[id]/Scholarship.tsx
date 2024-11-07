// Scholarship.jsx
import Image from "next/image";
import Link from "next/link";

export default function Scholarship() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="#" className="hover:text-red-600">
            Articles
          </Link>{" "}
          &gt;
          <Link href="#" className="hover:text-red-600">
            Graduate School Application Trends
          </Link>
        </nav>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Graduate School Application Trends - Insights From Boston University
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Perfect your graduate school application with these tips from an industry expert.
        </p>
        <p className="text-sm text-gray-500">
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
        <div className="mt-8">
          <Image
            src="/path-to-your-image.jpg" // Replace with the actual path
            alt="Boston University - Building entrance"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
            width={800}
            height={256}
          />
        </div>
      </div>
    </section>
  );
}
