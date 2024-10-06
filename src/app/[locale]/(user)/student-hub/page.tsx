// components/StudentHub.tsx
import MessagesAndSavedPrograms from "@/components/user/MessagesAndSavedPrograms";
import UserSearchBar from "@/components/user/UserSearchBar";

import React from "react";

const StudentHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
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
    </div>
  );
};

export default StudentHub;
