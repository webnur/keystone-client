import React from 'react';
import Introduction from './Introduction';
import Gallery from './Gallery';
import Locations from './Locations';
import LeftSidebar from './LeftSideBar';
import Admissions from './Addmissions';


export default function RightContent() {
  return (
    <div className="flex mb-4">
      {/* Left Sidebar */}
      <div className="w-1/4">
        <LeftSidebar activeSection="Introduction" />
      </div>

      {/* Right Content */}
      <div className="w-3/4 bg-white p-8">
        <div className="space-y-16">
          <section id="Introduction" className="mb-10">
            <Introduction />
          </section>
          
          <section id="Gallery" className="mb-10 border-t border-gray-300 pt-8">
            <Gallery />
          </section>
          
          <section id="Admissions" className="mb-10 border-t border-gray-300 pt-8">
            <Admissions />
          </section>
          
          <section id="Locations" className="mb-10 border-t border-gray-300 pt-8">
            <Locations />
          </section>
        </div>
      </div>
    </div>
  );
}
