// src/components/Footer.jsx
import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-evenly items-start text-center md:text-left max-w-6xl mx-auto gap-10">
        
        {/* WHO WE ARE */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-[#ff7b00]">WHO WE ARE</h2>
          <p className="text-gray-300 leading-relaxed">
ADORE is a global volunteer-driven community that brings together individuals who aspire to make a positive difference in society through small yet impactful actions. 
We believe that change begins with awareness, empathy, compassion and action.
          </p>
          <a
            href="https://adoreglobal.org/about" // ✅ replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff7b00] mt-3 inline-block hover:underline"
          >
            Read More
          </a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-[#ff7b00]">SOCIAL MEDIA</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="#" className="hover:text-[#25D366]" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-[#E1306C]" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#1877F2]" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#FF0000]" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#0A66C2]" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6 text-sm">
        © 2025 ADORE By Simtrak Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
