// src/components/WhyFellowship.jsx
import React from "react";
import { FaPlay } from "react-icons/fa";
import Thumbnail from "./assets/Thumbnail_Adore.jpg"

const WhyFellowship = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Why is the Adore Fellowship Important?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
              Education in India faces a severe crisis, with millions of children still deprived of quality learning. While enrollment has improved over the years, the overall quality of education remains a major challenge. Low learning outcomes, shortage of trained teachers, inadequate infrastructure, and weak governance continue to affect the system.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            We believe that the best way to solve these challenges is by creating 
            a pool of leaders like you who are committed to transforming education 
            in India.
          </p>
        </div>

        {/* Right Side - Video Preview */}
        <div className="relative">
          {/* orange Corner Border Effect */}
          <div className="absolute -top-4 -right-4 w-full h-full border-4 border-orange-400 rounded-xl"></div>

          {/* Video Thumbnail */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src= {Thumbnail}
              alt="Bhumi Fellowship Video"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Play Button
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <FaPlay className="text-white text-xl ml-1" />
              </span>
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyFellowship;
