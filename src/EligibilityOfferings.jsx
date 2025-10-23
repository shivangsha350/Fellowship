// src/components/EligibilityOfferings.jsx
import React from "react";
import { FaUserGraduate, FaIdCard, FaHandHoldingUsd, FaChalkboardTeacher, FaCalendarAlt, FaSeedling } from "react-icons/fa";

const offerings = [
  {
    icon: <FaUserGraduate size={40} />,
    text: "Graduates/final year students/early working professionals",
  },
  {
    icon: <FaIdCard size={40} />,
    text: "Age between 20 and 30 Years",
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    text: "Monthly Grant of Rs.25500/-",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    text: "In-depth",
  },
  {
    icon: <FaCalendarAlt size={40} />,
    text: "Placement in",
  },
  {
    icon: <FaSeedling size={40} />,
    text: "Seed Fund",
  },
];

const EligibilityOfferings = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-r from-blue-400 via-white to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Eligibility & Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-300 text-blue-950 mb-4">
              {item.icon}
            </div>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EligibilityOfferings;
