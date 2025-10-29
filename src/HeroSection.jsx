import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ FIXED: added missing import

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-12 h-[70vh] flex items-center bg-gradient-to-r from-blue-400 via-white to-blue-50 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">

          {/* Left Side - Text */}
          <div
            className={`text-center md:text-left transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              <span className="text-black-700">ADORE Fellowship</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-sm text-gray-600 px-2 sm:px-0">
              Where creativity meets innovation, and collaboration drives the future
              <br /> of endless possibilities.
            </p>

            {/* Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-5 sm:px-6 py-3 rounded-lg bg-blue-400 text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg text-sm sm:text-base">
                Become an ADORE Fellow
              </button>
            </div>
          </div>

          {/* Right Side - Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Decorative Blue Border */}
            <div className="absolute -top-5 -left--2 w-[70%] h-[100%] border-4 border-blue-400 rounded-xl"></div>

            <img
              src="/Thumbnail_Adore.jpg"
              alt="Adore Fellowship"
              className="rounded-xl shadow-xl relative z-10 w-56 sm:w-64 md:w-72 lg:w-80 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Sliding Strip Below Hero */}
      <div className="bg-gray-100 py-3 overflow-hidden relative mt-4">
        <div className="whitespace-nowrap animate-bounce-strip flex items-center space-x-10 font-semibold text-gray-800">
          <span><strong>ADORE Fellowship Benefits</strong></span>
          <span>1. Mentorship by Core Team</span>
          <span>2. Certificate of Completion</span>
          <span>3. Letter of Recommendation (for impactful fellows)</span>
          <span>4. Networking & Recognition</span>
          <span>5. Real-World Leadership Experience</span>
          <span>6. STIPEND</span>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes bounceStrip {
          0% { transform: translateX(0); }
          50% { transform: translateX(calc(-100% + 100vw)); }
          100% { transform: translateX(0); }
        }
        .animate-bounce-strip {
          display: inline-block;
          animation: bounceStrip 10s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
