import React from 'react';

// Mock content for each section
const sectionsContent: Record<string, string> = {
  introduction: 'Our curriculum focuses on producing graduates who have the knowledge and skills...',
  admissions: 'Admissions information goes here...',
  curriculum: 'Curriculum details go here...',
  'program-outcome': 'Program outcome information goes here...',
  'about-the-school': 'Information about the school goes here...',
  'ask-a-question': 'Ask a question section...',
};

const MidContent = ({ programId }: { programId: string }) => {
  return (
    <div className="w-2/4 p-8 space-y-12">
      <h2 className="text-2xl font-bold mb-4">Program ID: {programId}</h2>
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

export default MidContent;
