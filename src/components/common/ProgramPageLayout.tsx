import React from 'react';
import Filters from './FIlter';
import ProgramList from './ProgramList';


const ProgramPageLayout: React.FC = () => {
  return (
    <div className="container mx-auto flex py-8">
      {/* Left Sidebar */}
      <Filters />
      
      {/* Right Main Content */}
      <ProgramList />
    </div>
  );
};

export default ProgramPageLayout;
