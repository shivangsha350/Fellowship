import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-16 min-h-[70vh] flex items-center bg-gradient-to-r from-blue-400 via-white to-blue-50 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

          {/* Left Side - Text */}
          <div
            className={`text-center md:text-left transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              <span className="text-black-800">ADORE Fellowship</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 px-2 sm:px-0">
              Where creativity meets innovation, and collaboration drives the future
              <br className="hidden sm:block" />
              of endless possibilities.
            </p>

            {/* Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors shadow-md text-sm sm:text-base text-center"
              >
                Become an ADORE Fellow
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Decorative Blue Border */}
            <div className="absolute -top-3 sm:-top-4 w-[85%] sm:w-[85%] h-[95%] border-4 border-blue-400 rounded-xl"></div>

            <img
              src="/Thumbnail_Adore.jpg"
              alt="Adore Fellowship"
              className="rounded-xl shadow-xl relative z-10 w-60 sm:w-72 md:w-80 lg:w-[22rem] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Sliding Strip Below Hero */}
      <div className="bg-gray-100 py-3 overflow-hidden mt-6">
        <div className="whitespace-nowrap animate-bounce-strip flex items-center gap-10 sm:gap-16 text-gray-800 text-sm sm:text-base font-semibold px-4">
          <span className="text-blue-700 font-bold">ADORE Fellowship Benefits</span>
          <span>1. Mentorship by Core Team</span>
          <span>2. Certificate of Completion</span>
          <span>3. Letter of Recommendation</span>
          <span>4. Networking & Recognition</span>
          <span>5. Leadership Experience</span>
          <span>6. Stipend</span>
        </div>
      </div>

      {/* Animation for Strip */}
      <style>{`
        @keyframes bounceStrip {
          0% { transform: translateX(0); }
          50% { transform: translateX(calc(-100% + 100vw)); }
          100% { transform: translateX(0); }
        }
        .animate-bounce-strip {
          display: inline-block;
          animation: bounceStrip 12s ease-in-out infinite alternate;
        }

        /* Improve readability on small screens */
        @media (max-width: 640px) {
          .animate-bounce-strip span {
            display: inline-block;
            min-width: max-content;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
