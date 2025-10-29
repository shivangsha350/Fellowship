// src/components/AboutFellowship.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const AboutFellowship = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">

        {/* Left - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Decorative Blue Border */}
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-3 w-[85%] sm:w-[85%] h-[95%] border-4 border-blue-400 rounded-xl"></div>

          <img
            src="/Thumbnail_Adore.jpg"
            alt="Adore Fellowship"
            className="rounded-xl shadow-xl relative z-10 w-64 sm:w-72 md:w-80 lg:w-[22rem] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right - Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            About ADORE Fellowship
          </h2>

          <p className="text-gray-800 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
            ADORE Fellowship is a 2-year paid, transformative program to help you
            become the next leader in education. Through our fellowship program,
            we provide young leaders like you with hands-on training and
            on-the-job experience in teaching and transforming schools in India.
          </p>

          {/* Vision */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 mb-6"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md mx-auto sm:mx-0">
              <FaEye className="text-orange-500 text-xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Vision</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Achieving equitable education for all children through systemic change.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shadow-md mx-auto sm:mx-0">
              <FaBullseye className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Developing leaders who will transform schools and communities to
                achieve education equity.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFellowship;
