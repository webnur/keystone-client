import Head from "next/head";

export default function ScholarshipForm() {
  return (
    <div className="min-h-screen bg-[#E6F7F3] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Graduate Study in the USA Scholarship 2025</title>
      </Head>

      <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          <a href="https://www.educations.com">educations.com</a> Graduate Study
          in the USA Scholarship 2025 - Application Form
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Please read the full terms and conditions here: <br />
          <a
            href="https://www.educations.com/scholarships/graduate-study-in-the-usa-scholarship-terms-and-conditions"
            className="text-blue-600 hover:underline"
          >
            https://www.educations.com/scholarships/graduate-study-in-the-usa-scholarship-terms-and-conditions
          </a>
        </p>

        <form className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Personal details</h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address *
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age *
              </label>
              <select
                id="age"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select your age</option>
                {/* Add more age options */}
              </select>
            </div>

            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality (as shown on passport) *
              </label>
              <select
                id="nationality"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select your nationality</option>
                {/* Add nationality options */}
              </select>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country you currently live in *
              </label>
              <select
                id="country"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select your country</option>
                {/* Add country options */}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              About you (optional)
            </label>
            <textarea
              id="about"
              rows={2} // Fix: Change string to number
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 py-4">
              How did you hear about this scholarship? *
            </label>
            <div className="space-y-2 ml-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="google"
                  name="source"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="google" className="ml-3">
                  Google, Bing or other search engine
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="google"
                  name="source"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="google" className="ml-3">
                  Our website (educations.com)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="google"
                  name="source"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="google" className="ml-3">
                  Our website (educations.com)
                </label>
              </div>

              {/* Repeat for other options */}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 py-4">
              What is your main motivation for studying abroad? *
            </label>
            <div className="space-y-2 ml-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="motivation-1"
                  name="motivation"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="motivation-1" className="ml-3">
                  To experience a new culture or lifestyle
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="motivation-1"
                  name="motivation"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="motivation-1" className="ml-3">
                  To experience a new culture or lifestyle
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="motivation-1"
                  name="motivation"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="motivation-1" className="ml-3">
                  To experience a new culture or lifestyle
                </label>
              </div>

              {/* Repeat for other options */}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Have you followed our social media account(s)? *
            </label>
            <div className="mt-1">
              <ul className="list-disc list-inside">
                <li>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/educationscom"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.instagram.com/educationscom/
                  </a>
                </li>
                <li>
                  TikTok:{" "}
                  <a
                    href="https://www.tiktok.com/@educationscom"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.tiktok.com/@educationscom/
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/company/educationscom"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.linkedin.com/company/educationscom/
                  </a>
                </li>
                <li>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/educationscom"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.facebook.com/educationscom/
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="radio"
                id="yes"
                name="followed"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor="yes" className="ml-3">
                Yes
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="no"
                name="followed"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor="no" className="ml-3">
                No
              </label>
            </div>
          </div>

          {/* Social media optional inputs */}
          <div>
            <label
              htmlFor="facebook"
              className="block text-sm font-medium text-gray-700"
            >
              Facebook (optional)
            </label>
            <input
              type="text"
              id="facebook"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Facebook profile URL"
            />
          </div>

          {/* Repeat for LinkedIn, Instagram, and TikTok */}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
