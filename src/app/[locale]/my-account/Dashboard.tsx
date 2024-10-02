import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Welcome Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <div className="rounded-full w-24 h-24 bg-red-200 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold">Hi Rayhan!</h2>
          <p className="text-gray-700">Welcome to StudentHub</p>
          <p className="text-gray-700 max-w-lg mx-auto">
            Here you will find all of your messages from schools along with your saved programs. If you
            have not yet saved any programs, we suggest visiting the Browse Programs or Program
            Recommendations sections to find relevant programs for you!
          </p>
        </div>
      </section>

      {/* Study Preferences Section */}
      <section className="bg-white py-12 shadow-md rounded-md w-[90%] mx-auto max-w-4xl">
        <div className="flex justify-between items-center px-6">
          <h2 className="text-xl font-bold">Study Preferences</h2>
          <button className="text-red-500">Skip</button>
        </div>
        <p className="text-center text-gray-600 mb-4">Choose one or more</p>
        <div className="w-full px-6">
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-lg">Which Fields Interest You Most?</label>
            <div className="flex flex-wrap gap-3">
              {["Architecture Studies", "Business Studies", "Design Studies", "Economic Studies", "Engineering Studies", "Humanities Studies", "Management Studies", "Natural Sciences", "Social Sciences", "Technology Studies"].map(field => (
                <button key={field} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300">
                  {field}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-lg">Where Do You Want To Study?</label>
            <div className="flex flex-wrap gap-3">
              {["France", "Germany", "Italy", "Netherlands", "Russia", "Spain", "USA"].map(country => (
                <button key={country} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300">
                  {country}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-gray-300 text-gray-600 py-2 w-full rounded mt-6">Next</button>
        </div>
      </section>

      {/* Messages and Saved Programs Section */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto max-w-5xl">
        {/* Messages Section */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Messages</h3>
            <a href="#" className="text-red-500">See All</a>
          </div>
          <p className="text-gray-600">
            You don’t have any messages yet. To start your communication with institutions, visit the Browse
            Programs or Program Recommendations sections and request information for the programs that
            interest you. Your details will be immediately sent to the institutions and their admissions teams
            will follow up with you directly.
          </p>
        </div>

        {/* Saved Programs Section */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-bold mb-4">Saved Programs</h3>
          <p className="text-gray-600 mb-4">
            You have not yet saved any programs. To save a program, go to the Browse Programs section and then click the Heart icon next to any program that interests you.
          </p>
          <h4 className="font-bold">Popular fields</h4>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Economic Studies", count: 4140 },
              { name: "Engineering Studies", count: 4223 },
              { name: "Natural Sciences", count: 3489 },
              { name: "Social Sciences", count: 7960 },
              { name: "Technology Studies", count: 5411 },
            ].map(field => (
              <li key={field.name}>
                <button className="bg-red-100 text-red-600 w-full text-left py-2 px-4 rounded-full">
                  {field.name} ({field.count})
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
