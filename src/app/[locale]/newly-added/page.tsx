import React from 'react'
import NSidebar from './NSidebar';
import RightSidebar from './RSidebar';

const page = () => {
    const sections = [
        "Introduction",
        "Admissions",
        "Curriculum",
        "Program Outcome",
        "About the School",
        "Ask a Question",
      ];
  return (
    <div className='mt-10 flex w-full'>
        <NSidebar sections={sections} />

        <RightSidebar
        logo="/path/to/logo.png"
        institution="Mahidol University"
        programId="cyber-security"
      />
    </div>
  )
}

export default page