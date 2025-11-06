import React from "react";

const Who_Can_Apply = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/image1.png"
            alt="Who Can Apply"
            className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Can Apply
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The <strong>ADORE Fellowship</strong> is open to individuals who are
            passionate about creating a positive impact and developing essential
            leadership skills.
          </p>

          <ul className="list-disc list-inside mt-6 space-y-3 text-gray-800">
            <li>
              <strong>Students (18–30 years):</strong> Passionate about social
              causes and personal growth.
            </li>
            <li>
              <strong>Youth leaders and volunteers:</strong> Seeking hands-on
              experience in real projects.
            </li>
            <li>
              Individuals eager to build{" "}
              <strong>communication, leadership,</strong> and{" "}
              <strong>teamwork skills.</strong>
            </li>
            <li>
              <strong>Program Duration:</strong> 1 Year (12 Months)
            </li>
          </ul>

          <p className="mt-6 text-gray-700 text-lg">
            No prior volunteering experience is required — just the willingness
            to learn, lead, and contribute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who_Can_Apply;
