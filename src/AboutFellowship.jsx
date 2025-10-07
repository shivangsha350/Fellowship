// src/components/AboutFellowship.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import aboutImage from "./assets/Thumbnail_Adore.jpg";

const AboutFellowship = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-orange-0 via-orange-100 to-orange-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* Left - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Orange Border */}
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-orange-400 rounded-xl"></div>

          <img
            src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZlbGxvd3NoaXAlMjBwcm9ncmFtfGVufDB8fDB8fHww"
            alt="Adore Fellowship"
            className="rounded-xl shadow-xl relative z-10 transform hover:scale-105 transition-transform duration-700"
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
