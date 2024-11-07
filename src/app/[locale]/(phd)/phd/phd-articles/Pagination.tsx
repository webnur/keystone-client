import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="container mx-auto mt-8 mb-16 flex justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-lg transition ${
            page === currentPage
              ? "bg-red-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
