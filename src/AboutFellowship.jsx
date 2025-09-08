import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa"; // vision & mission icons
import aboutImage from "./assets/Thumbnail_Adore.jpg";  // place your image inside src/assets/

const AboutFellowship = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        
        {/* Left - Image */}
        <div>
          <img
            src={aboutImage}
            alt="Bhumi Fellowship"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About ADORE Fellowship
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            ADORE Fellowship is a 2-year paid, transformative program to help you
            become the next leader in education. Through our fellowship program,
            we provide young leaders like you with hands-on training and
            on-the-job experience in teaching and transforming schools in India.
          </p>

          {/* Vision */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <FaEye className="text-orange-500 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              <p className="text-gray-600">
                Achieving equitable education for all children through systemic change
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <FaBullseye className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-600">
                Developing leaders who will transform schools and communities to
                achieve education equity
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFellowship;
