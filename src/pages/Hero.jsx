import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/img3.png";
import IncubationNationIcon from "../assets/images/incubenation-DP-3.png";

// Extracted data to keep component clean
const focuses = [
  {
    title: "Incubation Center",
    description:
      "Encouraging and supporting individuals to become entrepreneurs through workshops, mentorship, and access to resources.",
    icon: IncubationNationIcon,
    link: "/center",
  },
  {
    title: "Incubation Online",
    description:
      "Providing resources, mentorship, and guidance to help startups grow, pivot, and scale in competitive markets.",
    icon: IncubationNationIcon,
    link: "/online",
  },
  {
    title: "Incubation Campus",
    description:
      "Bringing investors and startups together for potential funding, partnerships, and collaboration opportunities.",
    icon: IncubationNationIcon,
    link: "/campus",
  },
  {
    title: "Business Solutions",
    description:
      "Fostering partnerships with government bodies and corporate entities to boost innovation and growth.",
    icon: IncubationNationIcon,
    link: "/business",
    tag: "Coming Soon",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#061428] to-[#0b1c3a] px-6 py-16 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={HeroImage}
              alt="Incubation Hub - Startup Growth Platform"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Where Startups Hatch, Grow, <br />
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
              className="text-green-400"
            >
              and Soar!
            </motion.span>
          </h1>
          <p className="text-lg mt-5 text-gray-300 font-medium leading-relaxed">
            Ignite your entrepreneurial journey with{" "}
            <span className="text-green-400 font-semibold">IncubeNation</span>, 
            where ideas transform into thriving businesses through expert mentorship, funding access, and strategic partnerships.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-teal-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              Connect with us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Focus Areas Section */}
      <div className="relative mt-16 w-full px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Programs
        </h2>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg transition-transform duration-300 hover:shadow-2xl relative"
            >
              <img
                src={item.icon}
                alt={`Icon for ${item.title}`}
                className="w-16 h-16 mb-3"
              />
              <h3 className="text-2xl font-semibold text-gray-200 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm text-center mt-2">
                {item.description}
              </p>
              {item.tag && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  {item.tag}
                </span>
              )}
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.link}
                  className="mt-5 bg-transparent text-white border border-gray-200 px-5 py-2 rounded-full shadow-md transition-transform duration-300 hover:text-yellow-400 hover:border-yellow-400"
                >
                  Learn More..
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
