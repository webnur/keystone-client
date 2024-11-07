import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Article {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

interface MasterArticlesAndGuidesProps {
  articles: Article[];
}

const MasterArticlesAndGuides: React.FC<MasterArticlesAndGuidesProps> = ({
  articles,
}) => {
  const t = useTranslations("masterPage");

  // Limit articles to only the first 3 for display
  const displayedArticles = articles.slice(0, 3);

  return (
    <section className="bg-gray-100">
      <div className="py-16 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4 md:px-0">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-700">
              Expert Articles
            </h2>
            <p className="text-gray-500 text-lg mt-2">
              Discover study insights based on student and expert interviews.
            </p>
          </div>
          <Link href="/master/master-articles" className="hidden md:block">
            <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
              View All
            </button>
          </Link>
        </div>

        {/* Carousel for Mobile and Grid for Larger Screens */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible no-scrollbar pr-4 pl-4 md:pr-0 md:pl-0">
          {displayedArticles.map((article, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-0 flex-shrink-0 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Article Image */}
              <div className="relative h-[180px] md:h-[250px] w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold italic mt-2">
                    {article.date}
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    {article.description}
                  </p>
                </div>
                
                {/* Read More Button */}
                <div className="text-right mt-4">
                  <Link href={`/master/master-articles/${article.id}`} className="text-red-500 font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button for Mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link href="/master/master-articles">
            <button className="bg-red-100 text-red-500 px-8 py-2 rounded-lg hover:bg-red-200 transition duration-200">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterArticlesAndGuides;
