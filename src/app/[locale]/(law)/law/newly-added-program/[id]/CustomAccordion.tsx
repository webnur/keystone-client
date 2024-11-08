"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

// Define each possible content type with specific literal types
export type AccordionContentItem =
  | { type: "paragraph"; value: string }
  | { type: "image"; value: string }
  | { type: "slider"; value: string[] }
  | { type: "button"; value: string };

export interface AccordionItem {
  title: string;
  content: AccordionContentItem[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg shadow-sm overflow-hidden mb-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 bg-white text-left"
          >
            <span className="text-lg font-semibold text-gray-800">
              {item.title}
            </span>
            {openIndex === index ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-gray-50 text-gray-700 space-y-4">
              {item.content.map((content, idx) => {
                switch (content.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="text-gray-700">
                        {content.value}
                      </p>
                    );
                  case "slider":
                    return (
                      <div key={idx} className="text-center">
                        {/* Main Image */}
                        <div className="flex justify-center mb-4">
                          <Image
                            src={content.value[activeImageIndex]}
                            alt={`Slide ${activeImageIndex + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-2 justify-center">
                          {content.value.map((imgUrl, thumbIdx) => (
                            <div
                              key={thumbIdx}
                              className={`cursor-pointer p-1 rounded-lg ${
                                activeImageIndex === thumbIdx
                                  ? "border-2 border-red-500"
                                  : "border border-gray-300"
                              }`}
                              onClick={() => handleThumbnailClick(thumbIdx)}
                            >
                              <Image
                                src={imgUrl}
                                alt={`Thumbnail ${thumbIdx + 1}`}
                                width={80}
                                height={60}
                                className="w-20 h-14 rounded-lg"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  case "button":
                    return (
                      <div key={idx} className="flex justify-center">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                          {content.value}
                        </button>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
