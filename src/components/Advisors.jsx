import React, { useState, useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";

import ShefinImage from "../assets/images/shefin.jpg";
import hashImage from "../assets/images/hashim.jpg";
import abhiImage from "../assets/images/abhirami.jpg";
import jinoImage from "../assets/images/jino.jpg";

const advisors = [
  { name: "Shefin", title: "STUDY IN BANGLORE (CEO)", image: ShefinImage },
  { name: "Hashim", title: "CAREER CAFE (CEO)", image: hashImage },
  { name: "Abhirami", title: "FLYRAD (CEO)", image: abhiImage },
  { name: "Jino Joseph", title: "FRANCHISIFY (CEO)", image: jinoImage },
];

const Advisors = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-[#061428] to-[#0a1931] text-white ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wide">
          Meet Our Advisors
          <Briefcase className="inline-block w-7 h-7 ml-3" />
        </h2>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center shadow-md"
            >
              {/* Advisor Image */}
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-60 h-60 object-cover rounded-lg"
                onLoad={(event) => handleImageLoad(index, event)}
              />
              
              {/* Advisor Details */}
              <h3 className="text-lg font-semibold mt-4 text-white">
                {advisor.name}
              </h3>
              <p className="text-sm text-gray-300 text-center mt-1">
                {advisor.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
