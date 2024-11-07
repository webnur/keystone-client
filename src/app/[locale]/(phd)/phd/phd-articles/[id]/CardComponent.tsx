// CardComponent.jsx
import Image from 'next/image';
import React from 'react';

const CardComponent = () => {
  const cards = [
    {
      title: "Master's Scholarships in the United Kingdom",
      description: "This is a list of scholarships you can apply for if you'd like to get a Master's in the UK as an international student.",
      buttonText: "See scholarships →",
      imageUrl: "https://i.ibb.co.com/CbgWHWY/126297-photo-1477238134895-98438ad85c30.jpg",
    },
    // More card objects
  ];

  return (
    <div className="space-y-8 p-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-64 object-cover" src={card.imageUrl} alt={card.title} width={800} height={256} />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <button className="bg-red-600 text-white py-2 px-4 rounded-full transition hover:bg-red-700">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
