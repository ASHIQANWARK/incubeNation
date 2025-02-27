import React, { useState } from "react";
import { Briefcase } from "lucide-react";

const advisors = Array.from({ length: 100 }, (_, i) => ({
  name: `Advisor ${i + 1}`,
  title: "Business Strategist",
  image: `https://randomuser.me/api/portraits/men/${i % 50}.jpg`,
}));

const ITEMS_PER_PAGE = 15;

const Advisors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(advisors.length / ITEMS_PER_PAGE);

  const paginatedAdvisors = advisors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="py-12 bg-[#061428] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Meet Our Advisors
          <Briefcase className="inline-block w-6 h-6 ml-2 text-cyan-400" />
        </h2>

        {/* Advisors Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {paginatedAdvisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white/10 border border-cyan-400 rounded-xl p-2 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow-md mb-2"
              />
              <h3 className="text-sm font-semibold text-center">{advisor.name}</h3>
              <p className="text-xs text-gray-300 text-center">{advisor.title}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-3 py-1 text-sm font-semibold bg-cyan-500 rounded-lg shadow-md transition 
              ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm mx-4 px-3 py-1 bg-gray-700 rounded-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 text-sm font-semibold bg-cyan-500 rounded-lg shadow-md transition 
              ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
