import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200 h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-100 to-pink-100 opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 via-purple-300 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-400 via-pink-300 to-transparent rounded-full blur-3xl opacity-50"></div>

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-xl opacity-70"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-28 h-28 bg-purple-300 rounded-full blur-xl opacity-70"
        animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>

      {/* Announcement Tag */}
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <span className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-lg font-medium tracking-wide animate-bounce">
          New ✨ Automations is now live!
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Transforming Education
        <br />
        with <span className="text-purple-600 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">AI-Driven</span> Solutions
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 mt-6 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Empower your school with intelligent solutions for students, teachers, and parents.
        <br />
        Vinaiak makes learning smarter, teaching effective, and parenting supportive.
      </motion.p>

      {/* Call-to-Actions */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-md font-semibold text-lg shadow-xl transition-transform transform hover:scale-105">
          Our Services
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-md font-semibold text-lg shadow-xl border border-gray-300 transition-transform transform hover:scale-105">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
