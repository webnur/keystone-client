// components/StudentHub.tsx
import MessagesAndSavedPrograms from "@/components/user/MessagesAndSavedPrograms";
import UserFooter from "@/components/user/UserFooter";
import UserSearchBar from "@/components/user/UserSearchBar";
import Link from "next/link";
import React from "react";

const StudentHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-gray-800">
        <nav className=" container mx-auto text-white p-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="#" className="text-pink-500">
              Dashboard
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Browse Programs
            </Link>
            <div className="relative">
              <Link href="#" className="hover:text-gray-300">
                Messages
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-2 text-xs">
                1
              </span>
            </div>
            <div className="relative">
              <Link href="#" className="hover:text-gray-300">
                Saved Programs
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-2 text-xs">
                1
              </span>
            </div>
            <Link href="#" className="hover:text-gray-300">
              Compare Programs
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Program Recommendations
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Student Resources
            </Link>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">
            My Account
          </button>
        </nav>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center mt-12 mb-6">
        <div className="w-24 h-24 bg-red-200 rounded-full border-4 border-red-500"></div>
        <h2 className="mt-4 text-xl font-semibold">Hi Nurul!</h2>
        <h3 className="text-2xl font-bold">Welcome to StudentHub</h3>
        <p className="text-center text-gray-600 mt-2 max-w-lg">
          Here you will find all of your messages from schools along with your
          saved programs. If you have not yet saved any programs, we suggest
          visiting the Browse Programs or Program Recommendations sections to
          find relevant programs for you!
        </p>
      </div>

      {/* search bar  */}
      <div className="py-6">
        <UserSearchBar />
      </div>
      {/* MessagesAndSavedPrograms */}
      <MessagesAndSavedPrograms />
      <UserFooter />
    </div>
  );
};

export default StudentHub;
