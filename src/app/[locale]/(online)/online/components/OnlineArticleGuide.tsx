import Image from "next/image";
import React from "react";
import Link from "next/link"; // Importing Link for navigation

interface Article {
  id: string; // Add id for routing
  title: string;
  date: string;
  image: string;
  description: string;
}

interface MasterArticlesAndGuidesProps {
  articles: Article[];
}

const OnlineArticlesAndGuides: React.FC<MasterArticlesAndGuidesProps> = ({
  articles,
}) => {
  return (
    <section className="bg-gray-100">
      <div className="py-16 text-center container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Articles and guides
          </h2>
          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
            View all
          </button>
        </div>

        <p className="text-gray-500 mb-4 text-center md:text-left">
          Dive into our guides covering Law student experiences, career
          information, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-4"
            >
              {/* Article Image */}
              <div className="max-w-550 h-[250px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={550}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="flex-grow text-left">
                <h3 className="text-[1.125rem] font-bold leading-[183%] text-gray-800 mt-5">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mt-6 font-semibold base italic my-4 mx-0">
                  {article.date}
                </p>
              </div>

              {/* Read More Button (Linking to the article details page) */}
              <div className="text-right">
                <Link
                  className="text-red-500 font-semibold"
                  href={`/online/online-articles/${article.id}`}
                >
                  Read more <span className="inline-block transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineArticlesAndGuides;
