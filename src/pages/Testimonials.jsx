import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rinosh George",
    role: "Volunteer",
    text: "I Que Ventures' comprehensive support has been a cornerstone of our success. Their commitment to fostering collaboration with key stakeholders has significantly accelerated our growth and market presence.",
  },
  {
    name: "Mohammed Afan",
    role: "Volunteer",
    text: "I Que Ventures has been instrumental in our startup's growth journey. Their tailored programs and insightful mentorship connected us with the right investors, propelling us from concept to market success.",
  },
  {
    name: "Sinead Bailey",
    role: "Volunteer",
    text: "The collaborative environment fostered by I Que Ventures is unparalleled. Their ability to bridge the gap between startups and key stakeholders has opened doors we never thought possible.",
  },
  {
    name: "Suresh Iyer",
    role: "Volunteer",
    text: "Partnering with I Que Ventures has been a rewarding experience. Their curated network of innovative startups provides a steady stream of high-potential investment opportunities.",
  },
  {
    name: "Alok Mehta",
    role: "Entrepreneur",
    text: "The mentorship and funding support from I Que Ventures have helped us scale beyond expectations. We highly recommend them to any startup looking for a solid foundation.",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#061428] leading-snug">
  What Our Partners Say
</h2>

      <Slider {...settings} className="gap-x-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-xl text-[#061428] font-medium italic mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center mt-6">
                <div className="text-yellow-500 text-lg mr-1">★★★★★</div>
                <p className="text-sm text-[#061428]">{testimonial.role}</p>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#061428]">{testimonial.name}</h3>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
