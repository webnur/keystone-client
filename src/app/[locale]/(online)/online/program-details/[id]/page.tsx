"use client";
import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import LeftSideMenu from './LeftSideMenu';
import MidContent from './MidContent';
import RightSideMenu from './RightSideMenu';

const Page = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();

  const programId = Array.isArray(id) ? id[0] : id;
  const logo = searchParams.get('logo') || '/default-logo.png'; 

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
      {/* Left Sidebar with 15% width */}
      <div className="w-[15%]">
        <LeftSideMenu sections={sections} />
      </div>

      {/* Middle content with 70% width */}
      <div className="w-[65%] mx-auto">
        <MidContent programId={programId} />
      </div>

      {/* Right Sidebar with 15% width */}
      <div className="w-[15%]">
        <RightSideMenu
          logo={logo} // Pass dynamic logo
          institution="Mahidol University"
          programId={programId}
        />
      </div>
    </div>
  );
};

export default Page;
