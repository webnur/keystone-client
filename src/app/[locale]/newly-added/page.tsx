"use client"
import React from 'react';
import NSidebar from './NSidebar';
import MiddleContent from './MiddleContent';
import RightSidebar from './RSidebar';

const Page = () => {
  const sections = [
    'Introduction',
    'Admissions',
    'Curriculum',
    'Program Outcome',
    'About the School',
    'Ask a Question',
  ];

  return (
    <div className="mt-10 flex w-full">
      {/* Left Sidebar */}
      <div className="w-1/4">
        <NSidebar sections={sections} />
      </div>

      {/* Middle content */}
      <div className="w-1/2 mx-auto">
        <MiddleContent />
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4">
        <RightSidebar
          logo="/path/to/logo.png"
          institution="Mahidol University"
          programId="cyber-security"
        />
      </div>
    </div>
  );
};

export default Page;
