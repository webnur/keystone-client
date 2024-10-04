import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-48 h-2 bg-green-500 animate-pulse mb-2"></div>
          <p className="text-gray-600 text-sm">Customizing recommendations...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Loader;
