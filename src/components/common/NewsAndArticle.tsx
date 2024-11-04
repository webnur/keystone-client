import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  title: string;
  date: string;
  image: string;
}

interface NewsAndArticlesProps {
  articles: Article[];
}

const NewsAndArticles: React.FC<NewsAndArticlesProps> = ({ articles }) => {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="md:text-3xl text-2xl font-bold">News and Articles</h2>
          <Link href="/articles">
            <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200 hidden md:block">
              View all
            </button>
          </Link>
        </div>

        {/* Carousel for Mobile, Grid for Larger Screens */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="md:hidden overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-4">
              {articles.map((article, index) => (
                <div key={index} className="w-80 flex-shrink-0 snap-center bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="py-4 px-1">
                    <h3 className="md:text-lg text-base font-semibold text-wrap">{article.title}</h3>
                    <p className="text-gray-500 text-sm">{article.date}</p>
                    <Link href="/articles">
                      <span className="text-red-500 hover:underline mt-2 block">
                        Read more →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid view for larger screens */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                  <Link href="/articles">
                    <span className="text-red-500 hover:underline mt-2 block">
                      Read more →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center md:hidden">
          <Link href="/articles">
            <button className="bg-red-100 text-red-500 px-8 py-2 rounded-lg hover:bg-red-200 transition duration-200">
              View all
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndArticles;
