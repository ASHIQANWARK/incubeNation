import React from "react";
import { User } from "lucide-react";

import ShefinImage from "../assets/images/shefin.jpg";
import hashImage from "../assets/images/hashim1.jpg";
import abhiImage from "../assets/images/abhirami.jpg";
import jinoImage from "../assets/images/jino.jpg";

const advisors = [
  { name: "Shefin", title: "STUDY IN BANGALORE (CEO)", image: ShefinImage },
  { name: "Hashim", title: "CAREER CAFE (CEO)", image: hashImage },
  { name: "Abhirami", title: "FLYRAD (CEO)", image: abhiImage },
  { name: "Jino Joseph", title: "FRANCHISIFY (CEO)", image: jinoImage },
];

const Advisors = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0b081f] mb-12">
          Our Advisors
          <User className="inline-block w-8 h-8 ml-2 text-[#05081e]" />
        </h2>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center 
              transition-all hover:shadow-2xl hover:scale-105 w-full h-[480px]"
            >
              {/* Profile Image */}
              <div className="w-full min-h-[220px] md:min-h-[260px] flex items-center justify-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover rounded-md shadow-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                />
              </div>

              {/* Advisor Details */}
              <h3 className="text-lg font-semibold mt-4 text-white">{advisor.name}</h3>
              <p className="text-sm text-gray-300 text-center mt-2">{advisor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
