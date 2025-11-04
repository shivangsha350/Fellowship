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
            <h1 className="text-3xl sm:text-4xl lg:text-2xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              <span className="text-black-800">ADORE FELLOWSHIP PROGRAM</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-xl sm:text-lg md:text-sm text-gray-700 px-2 sm:px-0">
              Empowering Youth. Inspiring Change. Building Leaders.
            </p>

            {/* Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
         <a
          href="https://bit.ly/ADORE-FELLOWSHIP"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md text-sm sm:text-base"
        >
          Become a Fellow
        </a>
                 <a
          href="https://www.canva.com/design/DAGz1Bh_rZ4/c7MRP8fBee1MdCAeHJyjSg/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md text-sm sm:text-base"
        >
          Download Brochure
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

<div className="bg-gray-100 py-3 overflow-hidden mt-6">
  <div className="animate-slide-strip text-gray-800 text-sm sm:text-base font-semibold px-4">
    <div className="flex items-center gap-x-16">
      <span className="text-blue-700 font-bold">ADORE Fellowship Benefits</span>
      <span>1. Mentorship & Guidance</span>
      <span>2. Collaborative Learning</span>
      <span>3. Reflection & Learning Reviews</span>
      <span>4. Certification & Stipend</span>
    </div>
    {/* Duplicate content for smooth loop */}
    <div className="flex items-center gap-x-16">
      <span className="text-blue-700 font-bold">ADORE Fellowship Benefits</span>
      <span>1. Mentorship & Guidance</span>
      <span>2. Collaborative Learning</span>
      <span>3. Reflection & Learning Reviews</span>
      <span>4. Certification & Stipend</span>
    </div>
  </div>
</div>




      {/* Animation for Strip */}
<style>{`
@keyframes slideStrip {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slide-strip {
  display: flex;
  animation: slideStrip 15s linear infinite;
  white-space: nowrap;
}

`}</style>

    </>
  );
};

export default HeroSection;
