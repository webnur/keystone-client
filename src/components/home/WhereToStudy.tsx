import React from 'react';

interface StudyLocation {
  name: string;
  image: string;
}

interface WhereToStudyProps {
  locations: StudyLocation[];
}

const WhereToStudy: React.FC<WhereToStudyProps> = ({ locations }) => {
  return (
    <section className="py-16 bg-white text-center w-4/5 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Where to study law</h2>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg hover:bg-red-200 transition duration-200">
          See all locations
        </button>
      </div>

      {/* Grid of Study Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <div key={index} className="relative overflow-hidden group">
            {/* Location Image */}
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg">
                Read more
              </button>
            </div>

            {/* Location Name */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-2 text-lg font-semibold text-gray-800 border-t-2 border-red-500 text-center">
              {location.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhereToStudy;
