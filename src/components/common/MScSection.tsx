import React from "react";

// Define types for the section data
type MScSectionItem = {
  name: string;
  link: string;
};

// Define props for the component
type MScSectionProps = {
  title: string;
  description: string;
  items: MScSectionItem[];
};

const MScSection: React.FC<MScSectionProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <div className="p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-none space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="text-blue-600 hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MScSection;
