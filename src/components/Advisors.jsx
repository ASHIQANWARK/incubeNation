import React from "react";
import { Briefcase } from "lucide-react";

import ShefinImage from "../assets/images/shefin.jpg";
import hashImage from "../assets/images/hashim.jpg";
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
    <div className="py-16 bg-gradient-to-b from-[#061428] to-[#0a1931] text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide">
          Meet Our Advisors
          <Briefcase className="inline-block w-7 h-7 ml-3" />
        </h2>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center shadow-md w-full 
              min-h-[520px] sm:min-h-[550px] md:min-h-[580px] lg:min-h-[600px] transition-all"
            >
              {/* Advisor Image */}
              <div className="w-full h-88 sm:h-96 md:h-[420px] lg:h-[560px] flex items-center justify-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                />
              </div>

              {/* Advisor Details */}
              <h3 className="text-lg font-semibold mt-6 text-white">{advisor.name}</h3>
              <p className="text-sm text-gray-300 text-center mt-2">{advisor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
