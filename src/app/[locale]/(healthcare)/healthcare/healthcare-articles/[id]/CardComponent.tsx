import Image from "next/image";
import React from "react";

const CardComponent = () => {
  const cards = [
    {
      title: "Master's Scholarships in the United Kingdom",
      description:
        "This is a list of scholarships you can apply for if you'd like to get a Master's in the UK as an international student.",
      buttonText: "See scholarships →",
      imageUrl: "https://via.placeholder.com/800x400.png?text=UK+Scholarships",
    },
    {
      title: "Master's Scholarships in the United States",
      description:
        "This is a list of scholarships you can apply for if you'd like to get a Master's in the USA as an international student.",
      buttonText: "See scholarships →",
      imageUrl: "https://via.placeholder.com/800x400.png?text=USA+Scholarships",
    },
    {
      title: "Master's Scholarships in Germany",
      description:
        "This is a list of scholarships you can apply for if you'd like to get a Master's in Germany as an international student.",
      buttonText: "See scholarships →",
      imageUrl:
        "https://via.placeholder.com/800x400.png?text=Germany+Scholarships",
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative w-full h-64">
            <Image
              src={card.imageUrl}
              alt={card.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
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
