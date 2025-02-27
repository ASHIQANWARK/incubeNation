import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ open/close
  };

  return (
    <section className="py-16  font-serif">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {/* FAQ Item 1 */}
        <div className="rounded-xl shadow-xl overflow-hidden bg-white transform transition-all duration-300 ease-in-out hover:scale-105">
          <button
            onClick={() => handleToggle(0)}
            className="w-full text-left font-semibold text-lg text-gray-700 py-6 px-8 bg-gray-100 hover:bg-white focus:outline-none transition-all duration-300 ease-in-out"
          >
            What is included in the Basic Plan?
          </button>
          {openIndex === 0 && (
            <div className="py-4 px-8 text-gray-600 bg-gray-50">
              The Basic Plan includes Shopify store setup, payment & shipping setup, and email support.
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="rounded-xl shadow-xl overflow-hidden bg-white transform transition-all duration-300 ease-in-out hover:scale-105">
          <button
            onClick={() => handleToggle(1)}
            className="w-full text-left font-semibold text-lg text-gray-700 py-6 px-8 bg-gray-100 hover:bg-white focus:outline-none transition-all duration-300 ease-in-out"
          >
            Can I upgrade my plan later?
          </button>
          {openIndex === 1 && (
            <div className="py-4 px-8 text-gray-600 bg-gray-50">
              Yes! You can upgrade to a higher plan at any time through your account settings.
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="rounded-xl shadow-xl overflow-hidden bg-white transform transition-all duration-300 ease-in-out hover:scale-105">
          <button
            onClick={() => handleToggle(2)}
            className="w-full text-left font-semibold text-lg text-gray-700 py-6 px-8 bg-gray-100 hover:bg-white focus:outline-none transition-all duration-300 ease-in-out"
          >
            Do you provide refunds?
          </button>
          {openIndex === 2 && (
            <div className="py-4 px-8 text-gray-600 bg-gray-50">
              We offer a 7-day refund policy for all plans if you are not satisfied with our service.
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="rounded-xl shadow-xl overflow-hidden bg-white transform transition-all duration-300 ease-in-out hover:scale-105">
          <button
            onClick={() => handleToggle(3)}
            className="w-full text-left font-semibold text-lg text-gray-700 py-6 px-8 bg-gray-100 hover:bg-white focus:outline-none transition-all duration-300 ease-in-out"
          >
            Is there support available for all plans?
          </button>
          {openIndex === 3 && (
            <div className="py-4 px-8 text-gray-600 bg-gray-50">
              Yes! All plans include support, but higher-tier plans offer priority assistance.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
