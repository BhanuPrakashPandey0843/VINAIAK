import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "animate.css"; // Make sure animate.css is installed for animations

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-400 via-blue-300 to-pink-400 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        {/* Large Transparent Logo Text */}
        <h1 className="text-8xl font-bold tracking-wide text-white opacity-15 animate__animated animate__fadeIn animate__delay-0.5s animate__fast">
          VINAIAK
        </h1>

        {/* Footer Text with Social Media Icons */}
        <div className="flex justify-between items-center w-full px-6 animate__animated animate__fadeIn animate__delay-1s">
          {/* Left-Aligned Text */}
          <p className="text-sm text-white opacity-80">
            ©2024 VinaiaK. All rights reserved.
          </p>

          {/* Right-Aligned Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="/"
              className="hover:scale-125 transition-transform text-white transform hover:translate-y-1 hover:text-pink-500 animate__animated animate__pulse animate__delay-1s"
              aria-label="Instagram"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="/"
              className="hover:scale-125 transition-transform text-white transform hover:translate-y-1 hover:text-blue-500 animate__animated animate__pulse animate__delay-1s"
              aria-label="Twitter"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="/"
              className="hover:scale-125 transition-transform text-white transform hover:translate-y-1 hover:text-blue-700 animate__animated animate__pulse animate__delay-1s"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="w-full border-white opacity-40 animate__animated animate__fadeIn animate__delay-1.5s animate__slower" />

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6 py-3 w-3/4 max-w-xl animate__animated animate__fadeIn animate__delay-2s animate__zoomIn">
          <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 hover:translate-y-1">
            About
          </button>
          <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 hover:translate-y-1">
            Solution
          </button>
          <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 hover:translate-y-1">
            Pricing
          </button>
        </div>

        {/* Designer Credit */}
        <p className="text-xs text-white opacity-80 animate__animated animate__fadeIn animate__delay-2.5s animate__slower">
          Made by Bhanu Prakash Pandey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
