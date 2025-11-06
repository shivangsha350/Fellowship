import React from "react";

const What_You_Gain = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-400 via-white to-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You'll Gain
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The <strong>ADORE Fellowship</strong> offers valuable personal and
            professional development opportunities that prepare you to lead with
            purpose and confidence.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>Enhanced leadership and communication skills</li>
            <li>Hands-on experience in social project management</li>
            <li>A deeper sense of empathy and community responsibility</li>
            <li>National-level recognition and certification</li>
            <li>A strong network of peers and mentors</li>
          </ul>

          <p className="mt-6 text-gray-700 text-lg">
            Every fellow grows through real-world challenges, collaboration, and
            reflection — shaping a confident and socially aware individual.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="/image2.png"
            alt="What You'll Gain"
            className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300"
          />
        </div>
      </div>
    </section>
  );
};

export default What_You_Gain;
