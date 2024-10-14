import React, { useEffect, useState } from 'react';

const StickySidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  // Implement smooth scroll behavior and tracking
  const sections = [
    { name: "What universities expect from students", id: "section1" },
    { name: "The do's and don'ts of your application", id: "section2" },
    { name: "Common student pitfalls", id: "section3" },
    { name: "Demand for shorter programs is growing", id: "section4" },
    { name: "Modern students are consumer-savvy", id: "section5" },
    { name: "Other trends in graduate recruitment", id: "section6" },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && element.offsetTop <= scrollPosition + 200) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="sticky top-16 w-full md:w-1/3">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Page Content</h3>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-md cursor-pointer ${
                  activeSection === section.id ? 'text-red-500 font-bold' : 'text-gray-700'
                }`}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default StickySidebar;
