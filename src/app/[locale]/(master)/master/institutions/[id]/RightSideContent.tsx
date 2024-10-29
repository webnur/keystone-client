import React from 'react';
import Introduction from './Introduction';
import Gallery from './Gallery';
import Locations from './Locations';
import Admissions from './Addmissions';



export default function RightContent() {
  return (
    <div className="w-3/4 bg-gray-50 p-8">
      <Introduction />
      <Gallery />
      <Admissions />
      <Locations />

    </div>
  );
}
