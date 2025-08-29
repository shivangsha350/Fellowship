import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-orange-100 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-snug sm:leading-tight">
            Welcome to <span className="text-orange-500">Adore Fellowship</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-2 sm:px-0">
            Where creativity meets innovation, and collaboration drives the future of endless possibilities.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-5 sm:px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg text-sm sm:text-base">
              Become an ADORE Fellow
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://fellowship.bhumi.ngo/assets/images/video_new_2.jpg"
            alt="Adore Fellowship"
            className="w-72 sm:w-80 md:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
