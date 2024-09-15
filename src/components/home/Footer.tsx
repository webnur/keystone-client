import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Browse thousands of graduate degrees around the world
          </h2>
          <p className="text-gray-300">
            Studying law opens doors to many professions around the world. With LAWSTUDIES, students can connect to law schools and programs and find the right law degree for their career aspirations. As a trusted part of the Keystone Education Group family of multi-lingual, student-centered websites, LAWSTUDIES is the key to law studies at all levels. Students use LAWSTUDIES to find LLBs and LLMs, MLS degrees, Law PhDs, paralegal courses, postgraduate law diplomas, and many other legal qualifications in countries around the world.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links Section */}
          <div className="mb-4 md:mb-0 text-gray-300 text-sm">
            <a href="#" className="hover:text-white mr-4">About us</a>
            <a href="#" className="hover:text-white mr-4">Promote your program</a>
            <a href="#" className="hover:text-white mr-4">Contact us</a>
            <a href="#" className="hover:text-white mr-4">Terms and Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <svg className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.5h-3v-4.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v4.5h-3v-9h3v1.104c.796-.693 1.83-1.104 2.931-1.104 2.485 0 4.5 2.015 4.5 4.5v4.5z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <svg className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.417.512.502.295.865.653 1.265 1.265.273.447.459 1.247.512 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.512 2.417-.295.502-.653.865-1.265 1.265-.447.273-1.247.459-2.417.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.417-.512-.502-.295-.865-.653-1.265-1.265-.273-.447-.459-1.247-.512-2.417-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.512-2.417.295-.502.653-.865 1.265-1.265.447-.273 1.247-.459 2.417-.512 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.265.058-2.137.25-2.88.53-.752.286-1.39.668-2.025 1.303-.634.634-1.017 1.273-1.303 2.025-.281.743-.473 1.615-.53 2.88-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.058 1.265.25 2.137.53 2.88.286.752.668 1.39 1.303 2.025.634.634 1.273 1.017 2.025 1.303.743.281 1.615.473 2.88.53 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.265-.058 2.137-.25 2.88-.53.752-.286 1.39-.668 2.025-1.303.634-.634 1.017-1.273 1.303-2.025.281-.743.473-1.615.53-2.88.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.058-1.265-.25-2.137-.53-2.88-.286-.752-.668-1.39-1.303-2.025-.634-.634-1.273-1.017-2.025-1.303-.743-.281-1.615-.473-2.88-.53-1.28-.06-1.688-.072-4.947-.072z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444 1.444-.648 1.444-1.444-.648-1.444-1.444-1.444z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <svg className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.075 4.486 11.095 10.355 11.898v-8.408h-3.113v-3.49h3.113v-2.66c0-3.07 1.85-4.748 4.646-4.748 1.34 0 2.743.24 2.743.24v3.022h-1.546c-1.523 0-1.997.945-1.997 1.915v2.231h3.396l-.543 3.49h-2.853v8.408c5.869-.803 10.355-5.823 10.355-11.898z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <svg className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.498 6.186c-.276-1.038-1.088-1.849-2.126-2.124-1.872-.505-9.373-.505-9.373-.505s-7.502 0-9.374.505c-1.037.276-1.85 1.087-2.126 2.124-.505 1.872-.505 5.776-.505 5.776s0 3.903.505 5.776c.276 1.038 1.089 1.849 2.126 2.125 1.872.505 9.374.505 9.374.505s7.501 0 9.373-.505c1.038-.276 1.85-1.087 2.126-2.125.505-1.872.505-5.776.505-5.776s0-3.903-.505-5.776zm-13.498 9.314v-7l6.146 3.5-6.146 3.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
