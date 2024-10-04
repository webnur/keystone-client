"use client"
import ActionButtons from '@/components/common/ActionButtons';
import Loader from '@/components/common/Loader';
import SearchPreferences from '@/components/common/SearchPreferences';
import React, { useState } from 'react';
import ProgramResults from './ProgramResults';

const ProgramRecommendationPage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Simulate loading
  setTimeout(() => {
    setShowLoader(false);
  }, 3000); // Simulating 3 seconds of loading

  const handleBrowseClick = () => {
    setShowSearch(true);
    setShowResults(false);
  };

  const handleSearchSubmit = () => {
    setShowSearch(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {showLoader && <Loader />}
      {!showLoader && !showSearch && !showResults && (
        <ActionButtons onBrowseClick={handleBrowseClick} />
      )}
      {!showLoader && showSearch && (
        <SearchPreferences onSearchSubmit={handleSearchSubmit} />
      )}
      {!showLoader && showResults && <ProgramResults />}
    </div>
  );
};

export default ProgramRecommendationPage;
