import React from 'react';
import Introduction from './Introduction';
import Gallery from './Gallery';
import Admissions from './Admissions';
import Locations from './Locations';



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
