import React from 'react';

interface BaseTextProps {
  content: string; // The dynamic text content passed as a prop
}

const BaseText: React.FC<BaseTextProps> = ({ content }) => {
  return (
    <div className="bg-white shadow-md p-6 text-left my-8 rounded-lg w-4/5 mx-auto">
      <p className="text-gray-800 text-lg leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default BaseText;
