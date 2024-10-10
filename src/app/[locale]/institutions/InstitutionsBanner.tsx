import React from 'react';

const InstitutionsBanner: React.FC = () => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Ponce Health Sciences University</h1>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Get more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsBanner;
