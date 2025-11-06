import React from "react";

const Join_the_movement = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src="/image.png"
            alt="Join the Movement"
            className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the Movement
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Be a part of a transformative journey where{" "}
            <strong>learning meets service</strong> and{" "}
            <strong>youth drives change</strong>.
          </p>

          <p className="text-gray-800 text-lg font-medium mb-6">
            <strong>Applications for the ADORE Fellowship Program are now open!</strong>
            <br />
            Click below to begin your journey toward{" "}
            <strong>leadership, empathy,</strong> and{" "}
            <strong>empowerment.</strong>
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://bit.ly/ADORE-FELLOWSHIP"><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
              Apply Now
            </button></a>
            <a href="https://adoreglobal.org/about"><button className="border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105">
              Learn More
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join_the_movement;
