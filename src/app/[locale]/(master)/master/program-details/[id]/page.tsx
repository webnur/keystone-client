"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import LeftSideMenu from './LeftSideMenu';
import MidContent from './MidContent';
import RightSideMenu from './RightSideMenu';

const Page = () => {
  const { id } = useParams(); // Get the dynamic program ID from the URL

  // Ensure that the id is treated as a string
  const programId = Array.isArray(id) ? id[0] : id; // Handling array case

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
        <LeftSideMenu sections={sections} />
      </div>

      {/* Middle content */}
      <div className="w-1/2 mx-auto">
        <MidContent programId={programId} />
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4">
        <RightSideMenu
          logo="/path/to/logo.png"
          institution="Mahidol University"
          programId={programId} // Pass dynamic ID here
        />
      </div>
    </div>
  );
};

export default Page;
