// src/components/AboutFellowship.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const AboutFellowship = () => {
  return (
    <section className="py-10 px-6 md:px-16 bg-gradient-to-r from-blue-50 via-white to-blue-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* Left - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Blue Border */}
          <div className="absolute -top-5 -left-6 w-[85%] h-[100%] border-4 border-blue-400 rounded-xl"></div>

          <img
            src="/Thumbnail_Adore.jpg"
            alt="Adore Fellowship"
            className="w-100 h-100 rounded-xl shadow-xl relative z-10 transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right - Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            About ADORE Fellowship
          </h2>

          <p className="text-gray-800 leading-relaxed mb-8 text-lg">
            ADORE Fellowship is a 2-year paid, transformative program to help you
            become the next leader in education. Through our fellowship program,
            we provide young leaders like you with hands-on training and
            on-the-job experience in teaching and transforming schools in India.
          </p>

          {/* Vision */}
          <motion.div
            className="flex items-start gap-4 mb-6"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
              <FaEye className="text-orange-500 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              <p className="text-gray-700">
                Achieving equitable education for all children through systemic change.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shadow-md">
              <FaBullseye className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-700">
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
