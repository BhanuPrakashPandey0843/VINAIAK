import React, { useState } from "react";
import logo from "../../assets/QuizifyQuiz-removebg-preview.png"; // Import logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#">
              <img src={logo} alt="Quizify Logo" className="w-32 h-auto" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Why Quizify", "About Us", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-800 hover:text-blue-500 font-medium relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-gray-800 hover:text-blue-500 font-medium transition duration-300"
            >
              Login
            </a>
            <a
              href="#signup"
              className="px-5 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-medium transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-2 space-y-2">
            {["Home", "Why Quizify", "About Us", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-gray-800 hover:text-blue-500 font-medium transition duration-300"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href="#login"
                className="text-gray-800 text-center hover:text-blue-500 font-medium transition duration-300"
              >
                Login
              </a>
              <a
                href="#signup"
                className="px-5 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-medium text-center transition duration-300 hover:bg-blue-500 hover:text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
