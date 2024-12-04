import React from "react";
import "animate.css"; // Ensure animate.css is installed

const MissionSection = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#FC5E24] to-[#F56C5E] text-white py-20 px-6 sm:px-12 lg:px-20 animate__animated animate__fadeIn animate__slow"
      style={{ minHeight: "500px", overflow: "hidden" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-6 animate__animated animate__fadeIn animate__delay-0.5s">
          Our Vision & Mission
        </h2>

        {/* Content */}
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 animate__animated animate__fadeIn animate__delay-1s max-w-3xl mx-auto">
          At VinaiaK, we are driven by a relentless pursuit of innovation and excellence. 
          Our mission is not just to provide solutions but to redefine the experience for our users and clients. 
          We aim to foster lasting relationships through trust, integrity, and exceptional service, 
          always striving to be at the forefront of industry advancements.
        </p>

        {/* Animated Button */}
        <div className="flex justify-center">
          <button
            className="px-10 py-4 bg-gradient-to-r from-black to-[#333] text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 hover:bg-gradient-to-l from-[#FC5E24] to-[#F56C5E] transition-all duration-300 animate__animated animate__pulse animate__delay-1.5s focus:outline-none"
            style={{
              fontSize: "18px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: "bold",
              border: "2px solid transparent",
              backgroundClip: "padding-box",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FC5E24";
              e.currentTarget.style.color = "#FC5E24";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            <span className="relative z-10">Explore Our Journey</span>
            <span
              className="absolute inset-0 bg-white opacity-10 transform translate-x-0 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2"
              style={{ borderRadius: "9999px" }}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;