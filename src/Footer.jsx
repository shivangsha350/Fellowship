// src/components/Footer.jsx
import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  const text =
    "ADORE is a youth-led global initiative that brings together students and young professionals who are passionate about creating a positive impact in society. It provides a platform for youth to explore their potential, develop leadership and life skills, and contribute meaningfully through volunteering, mentoring, and social projects. With its focus on education, awareness, and youth empowerment, ADORE believes in inspiring responsible action and nurturing changemakers for a better tomorrow.";

  const shortText = text.split(".").slice(0, 2).join(".") + ".";

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 text-center md:text-left max-w-6xl mx-auto">

        {/* WHO WE ARE */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-[#ff7b00]">WHO WE ARE</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            {showMore ? text : shortText}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#ff7b00] mt-2 hover:underline"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* MORE INFO */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-[#ff7b00]">MORE INFO</h2>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-[#ff7b00]">Contact us</a></li>
            <li><a href="#" className="hover:text-[#ff7b00]">Support</a></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-[#ff7b00]">SOCIAL MEDIA</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="#" className="hover:text-[#25D366]"><FaWhatsapp /></a>
            <a href="#" className="hover:text-[#E1306C]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#1877F2]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#FF0000]"><FaYoutube /></a>
            <a href="#" className="hover:text-[#0A66C2]"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        © 2025 ADORE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
