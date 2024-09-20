import React from 'react';
import Link from 'next/link';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">News and Articles</h2>
          <Link href="/articles">
            <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200">
              View all
            </button>
          </Link>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
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
    </section>
  );
};

export default NewsAndArticles;
