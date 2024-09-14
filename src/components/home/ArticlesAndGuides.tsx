import React from 'react';

interface Article {
  title: string;
  date: string;
  image: string;
  description: string;
}

interface ArticlesAndGuidesProps {
  articles: Article[];
}

const ArticlesAndGuides: React.FC<ArticlesAndGuidesProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-white text-center w-4/5 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Articles and guides</h2>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200">
          View all
        </button>
      </div>
      <p className="text-gray-500 mb-8 text-left">
        Dive into our guides covering Law student experiences, career information, and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            {/* Article Content */}
            <div className="p-4 flex-grow text-left">
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </div>
            {/* Read More Button (Positioned at the bottom-right) */}
            <div className="p-4 text-right">
              <button className="text-red-500 font-semibold">
                Read more <span className="inline-block transform rotate-45">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesAndGuides;
