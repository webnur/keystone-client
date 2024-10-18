import React from 'react';

// Define the type for sectionsContent
const sectionsContent: Record<string, string> = {
  introduction: `
    Our curriculum focuses on producing graduates who have the knowledge and skills in cyber security and information assurance. 
    The educational philosophy of the Master of Science in Cyber Security and Information Assurance (CY) is defined as Student-Centered 
    Approach, Constructivism and Essentialism Blending and is also aligned with Mahidol University’s educational philosophy.
  `,
  admissions: 'Admissions information goes here...',
  curriculum: 'Curriculum details go here...',
  'program-outcome': 'Program outcome information goes here...',
  'about-the-school': 'Information about the school goes here...',
  'ask-a-question': 'Ask a question section...',
};

const MiddleContent = () => {
  return (
    <div className="w-2/4 p-8 space-y-12">
      {Object.keys(sectionsContent).map((sectionKey, index) => (
        <div key={index} id={sectionKey}>
          <h2 className="text-2xl font-bold mb-4">
            {sectionKey.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
          </h2>
          <p>{sectionsContent[sectionKey]}</p>
        </div>
      ))}
    </div>
  );
};

export default MiddleContent;
