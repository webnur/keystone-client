"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  title: string;
  date: string;
  image: string;
}

interface ArticlesProps {
  articles?: Article[]; // Optional in case it is undefined initially
}

const Articles: React.FC<ArticlesProps> = ({ articles = [] }) => {
  const articlesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Articles</h2>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <Link href="/article-details">
                  <a className="text-red-500 hover:underline mt-2 block">
                    Read more →
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
