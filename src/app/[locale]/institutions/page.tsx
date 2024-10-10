"use client"
import React, { useState, useEffect } from 'react';
import Banner from './InstitutionsBanner';
import RightContent from './RightSideContent';
import LeftSidebar from './LeftSideBar';

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Study in United Kingdom');

  // Function to update active section based on scroll position
  const handleScroll = () => {
    const sections = [
      { id: 'Study in United Kingdom', offsetTop: document.getElementById('Study in United Kingdom')?.offsetTop },
      { id: 'Cost of Living', offsetTop: document.getElementById('Cost of Living')?.offsetTop },
      { id: 'Visa Requirements', offsetTop: document.getElementById('Visa Requirements')?.offsetTop },
      { id: 'About Country', offsetTop: document.getElementById('About Country')?.offsetTop },
      { id: 'Institutions', offsetTop: document.getElementById('Institutions')?.offsetTop },
      { id: 'Programs', offsetTop: document.getElementById('Programs')?.offsetTop }
    ];

    const scrollPosition = window.scrollY + 100; // Adjust based on header height or margin

    // Find the section that is currently being viewed
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= (sections[i].offsetTop || 0)) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Banner />
      <div className="flex">
        <LeftSidebar activeSection={activeSection} />
        <RightContent />
      </div>
    </div>
  );
};

export default Page;
