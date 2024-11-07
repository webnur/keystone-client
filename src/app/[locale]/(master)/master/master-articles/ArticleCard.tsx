"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pagination from "./Pagination";

interface Article {
  id: string;
  title: string;
  date: string;
  categories: string[];
  image: string;
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Why Study Hospitality and Tourism in Spain",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "2",
    title: "Scholarships for Master’s Studies in Spain",
    date: "October 2024",
    categories: ["Education", "Study Abroad"],
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "3",
    title: "Why You Should Study Design in Madrid",
    date: "October 2024",
    categories: ["Student Tips", "Education"],
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "4",
    title: "Master's Degree Salary Guide (2024)",
    date: "October 2024",
    categories: ["Student Tips"],
    image:
      "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "5",
    title: "What Is an MPA?",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "6",
    title: "Is a Master’s Degree Worth It?",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "7",
    title: "Master's Degree Requirements",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "8",
    title: "Benefits of Studying Abroad",
    date: "October 2024",
    categories: ["Study Abroad"],
    image:
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "9",
    title: "Preparing for Graduate School",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "10",
    title: "Guide to International Scholarships",
    date: "October 2024",
    categories: ["Scholarships"],
    image:
      "https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "11",
    title: "Studying in Europe vs. USA",
    date: "October 2024",
    categories: ["Study Abroad"],
    image:
      "https://images.pexels.com/photos/1468088/pexels-photo-1468088.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "12",
    title: "Why Choose a Master's Degree?",
    date: "October 2024",
    categories: ["Education"],
    image:
      "https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const itemsPerPage = 6;

const ArticleCardGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockArticles.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedArticles = mockArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto">
      <div className="flex mt-4 px-4 space-x-4 text-red-500">
        {[
          "Latest",
          "Education",
          "International News",
          "Student Tips",
          "Study Abroad",
          "Visa",
        ].map((tab, idx) => (
          <span key={idx} className="cursor-pointer hover:underline">
            {tab}
          </span>
        ))}
      </div>
      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {paginatedArticles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{article.date}</p>
              <div className="flex space-x-2 mt-1 text-red-500 text-xs font-semibold">
                {article.categories.map((category, idx) => (
                  <span key={idx}>{category}</span>
                ))}
              </div>
              <Link
                href={`/master/master-articles/${article.id}`}
                className="text-blue-500 text-sm mt-4 block"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArticleCardGrid;
