"use client";
// pages/messages.tsx
import { FC, useState } from "react";

// Define the type for message search input
type MessageSearchProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
};

const MessageSearch: FC<MessageSearchProps> = ({ searchTerm, onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
};

const MessagesPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Left Sidebar: Messages Section */}
      <div className="w-full md:w-1/4 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Messages</h2>

        {/* Search Component */}
        <MessageSearch searchTerm={searchTerm} onSearch={setSearchTerm} />

        {/* No messages content */}
        <p className="text-gray-600 mb-4">
          You dont have any messages yet. Click on the Browse Programs button
          below to contact your first school and get the conversation started!
        </p>

        {/* Browse Programs Button */}
        <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition duration-300">
          Browse Programs
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex-grow p-6">
        <div className="bg-gray-200 w-full h-full flex justify-center items-center">
          <p className="text-gray-500">Your messages will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
