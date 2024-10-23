import React from 'react';
import Image from 'next/image';

const locations = [
  {
    name: "Paraquita Bay",
    address:
      "CCFC + GQR Paraquita Bay, British Virgin Islands, VG1110, Paraquita Bay",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      youtube: "#",
    },
  },
  {
    name: "St. Louis",
    address: "2351 Market St., St. Louis, MO 63103, 63103, St. Louis",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      youtube: "#",
    },
  },
];

const Locations: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Locations</h2>

        {/* Map Placeholder */}
        <div className="mb-8 relative">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/BlankMap-World6.svg/1200px-BlankMap-World6.svg.png"
            alt="World Map"
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="w-4 h-4 bg-red-500 rounded-full block"></span>
            <span className="w-4 h-4 bg-red-500 rounded-full block ml-4"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{location.name}</h3>
              <p className="text-gray-700 mb-4">{location.address}</p>
              <div className="flex space-x-4">
                <a
                  href={location.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-red-500"></i>
                </a>
                <a
                  href={location.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-red-500"></i>
                </a>
                <a
                  href={location.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-red-500"></i>
                </a>
                <a
                  href={location.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-red-500"></i>
                </a>
                <a
                  href={location.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube text-red-500"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
