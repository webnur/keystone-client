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
  const logo = searchParams.get('logo') || '/default-logo.png'; // Default logo fallback

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
      <div className="w-1/4">
        <LeftSideMenu sections={sections} />
      </div>

      <div className="w-1/2 mx-auto">
        <MidContent programId={programId} />
      </div>

      <div className="w-1/4">
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
