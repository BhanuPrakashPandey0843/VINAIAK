import React from "react";
import { Link } from "react-router-dom"; // Routing for buttons
import heroBottom from "../../assets/Hero bottom.png"; // Bottom image
import heroright from "../../assets/Heroright.gif"; // Right-side image

const HeroSection = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Test Your Skills and Knowledge <br />
            with{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-yellow-300 rounded-lg -rotate-2 transform scale-110"></span>
              <span className="relative text-primary px-2">Expert Quizzes</span>
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Quizzes help students learn and engage with subjects in a fun and challenging way, expanding general knowledge and encouraging critical thinking.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link
              to="/signup"
              className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-900 transition shadow-lg transform hover:scale-105"
            >
              Sign up for free!
            </Link>
            <Link
              to="/teachers"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full text-lg font-medium hover:bg-primary hover:text-white transition shadow-md transform hover:scale-105"
            >
              Are you a Teacher?
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={heroright} // ✅ Corrected image import
            alt="Students learning"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Image Below the Component */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={heroBottom} // ✅ Correctly positioned at the bottom
          alt="Hero Bottom Background"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
