import React, { useState } from 'react';

const ActionButtons: React.FC<{ onBrowseClick: () => void }> = ({ onBrowseClick }) => {
  const [showSubscribe, setShowSubscribe] = useState(true);

  return (
    <div className="flex flex-col items-center space-y-4">
      {showSubscribe && (
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
          onClick={() => setShowSubscribe(false)}
        >
          Subscribe to our newsletter
        </button>
      )}
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        onClick={onBrowseClick}
      >
        Browse more programs
      </button>
    </div>
  );
};

export default ActionButtons;
