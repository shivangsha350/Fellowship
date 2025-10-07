// src/components/WhyFellowship.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Thumbnail from "./assets/Thumbnail_Adore.jpg";

const WhyFellowship = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-orange-0 via-orange-100 to-orange-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Why is the Adore Fellowship Important?
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Education in India faces a severe crisis, with millions of children
            still deprived of quality learning. While enrollment has improved
            over the years, the overall quality of education remains a major
            challenge. Low learning outcomes, shortage of trained teachers,
            inadequate infrastructure, and weak governance continue to affect
            the system.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mt-4">
            We believe that the best way to solve these challenges is by
            creating a pool of leaders like you who are committed to transforming
            education in India.
          </p>
        </motion.div>

        {/* Right Side - Video Preview */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Orange Corner Border Effect */}
          <div className="absolute -top-4 -right-4 w-full h-full border-4 border-orange-400 rounded-xl"></div>

          {/* Video Thumbnail */}
          <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbGxvd3NoaXB8ZW58MHx8MHx8fDA%3D"
              alt="Adore Fellowship Video"
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
            />

            {/* Play Button (optional – uncomment if you want it visible) */}
            {/* 
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white text-xl ml-1" />
              </span>
            </button>
            */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyFellowship;
