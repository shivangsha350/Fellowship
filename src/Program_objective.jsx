// src/components/EligibilityOfferings.jsx
import React from "react";

const offerings = [
  {
    title: "Empower Youth",
    text: "Build confidence, communication, and leadership skills through active participation.",
  },
  {
    title: "Promote Community Engagement",
    text: "Encourage meaningful contributions toward education, environment, equality, and sustainability.",
  },
  {
    title: "Develop Soft Skills",
    text: "Strengthen problem-solving, teamwork, time management, and empathy through experiential learning.",
  },
  {
    title: "Networking",
    text: "Connect fellows with like-minded youth and mentors to build a strong network of change agents.",
  },
  {
    title: "Encourage Volunteerism",
    text: "Inspire youth to adopt volunteering as a lifelong practice.",
  },
  {
    title: "Foster Personal Growth",
    text: "Help participants discover their potential and create positive social change.",
  },
  {
    title: "Practical Exposure",
    text: "Provide a platform where participants can apply their knowledge, creativity, and ideas to design and execute impactful social projects.",
  },
];

const Program_objective = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-r from-blue-400 via-white to-blue-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Program Objectives
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((item, index) => (
          <div
            key={index}
            className={`bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center 
              ${
                index === offerings.length - 1
                  ? "md:col-span-1 md:col-start-2" // 👈 center last card
                  : ""
              }`}
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program_objective;
