// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto">

        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-4">WHO WE ARE</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-500">About ADORE</a></li>
            <li><a href="#" className="hover:text-orange-500">Meet our Fellows</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-4">BHUMI FELLOWSHIP</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-500">Selection Process</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500">Apply Now</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4">MORE INFO</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-500">Contact us</a></li>
            <li><a href="#" className="hover:text-orange-500">Support</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-500">Donations</a></li>
            <li><a href="#" className="hover:text-orange-500">Scholarship</a></li>
            <li><a href="#" className="hover:text-orange-500">Scholarship for Education</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-4">SOCIAL MEDIA</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaYoutube /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-500"><FaInstagram /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © 2023 ADORE Fellowship.<br />All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
