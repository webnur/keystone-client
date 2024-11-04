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

  return (
    <section className="bg-gray-100">
      <div className="py-16 text-center container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:mb-8 mb-3 space-y-2 md:space-y-0 md:space-x-4">
          <h2 className="text-2xl md:text-3xl font-bold text-left md:text-left w-full md:px-0 px-4">
            {t("articalTitle")}
          </h2>
          <button className="hidden md:block bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
            {t("articalButton")}
          </button>
        </div>

        <p className="text-gray-500 mb-4 text-left md:text-left w-full md:px-0 px-4">
          {t("articleSubtitle")}
        </p>

        {/* Carousel for Mobile (Horizontal Scroll) and Grid for Larger Screens */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible no-scrollbar px-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-0 flex-shrink-0 md:flex-shrink basis-full border rounded-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-4 mx-4 md:mx-0"
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
                <p className="text-gray-500 text-sm mt-6 font-semibold italic my-4 mx-0">
                  {article.date}
                </p>
              </div>

              {/* Read More Button */}
              <div className="text-right">
                <Link
                  className="text-red-500 font-semibold"
                  href={`/master/master-articles/${article.id}`}
                >
                  {t("readMore")}{" "}
                  <span className="inline-block transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
              {/* Mobile "View All" Button with Reduced Margin */}
      <div className="flex justify-center md:hidden mt-4 w-full mx-auto">
        <button className="bg-red-100 text-red-500 px-8 py-2 rounded-lg hover:bg-red-200 transition duration-200 whitespace-nowrap">
          {t("articalButton")}
        </button>
      </div>
      </div>


    </section>
  );
};

export default MasterArticlesAndGuides;
