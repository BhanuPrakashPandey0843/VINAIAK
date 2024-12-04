import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-gray-100 to-pink-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-purple-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              VINAIAK
              </span>
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About Us", "Features", "Services", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-800 hover:text-purple-600 font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#login"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg hover:scale-105 transform transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Login
            </motion.a>
            <motion.a
              href="#signup"
              className="px-4 py-2 rounded-md border-2 border-purple-500 text-purple-600 font-medium shadow-lg hover:bg-purple-100 hover:scale-105 transform transition"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Sign Up
            </motion.a>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-4 pt-4 pb-2 space-y-2">
            {["Home", "About Us", "Features", "Services", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-800 hover:text-purple-600 font-medium"
                >
                  {item}
                </a>
              )
            )}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="#login"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg w-full text-center"
              >
                Login
              </a>
              <a
                href="#signup"
                className="px-4 py-2 rounded-md border-2 border-purple-500 text-purple-600 font-medium shadow-lg w-full text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
