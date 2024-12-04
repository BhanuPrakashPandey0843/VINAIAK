import React from 'react';
import { FaQuestionCircle, FaGraduationCap, FaUserCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SolutionCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between bg-white rounded-xl shadow-lg p-10 w-full sm:w-72 lg:w-80 mx-auto transform hover:scale-105 transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white flex items-center justify-center mb-6 shadow-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-center text-lg text-gray-600">{description}</p>
    </motion.div>
  );
};

const OurSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-orange-400 px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-12 w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Our Premium Solutions
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore our cutting-edge solutions tailored to empower your institution with enhanced automation, assistance, and efficiency.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <SolutionCard
          icon={<FaQuestionCircle size={40} />}
          title="General Assistance"
          description="Simplify queries with AI-powered Query Bots, offering instant and accurate responses."
        />
        <SolutionCard
          icon={<FaGraduationCap size={40} />}
          title="Student Assistance"
          description="Assist your students 24/7, resolving doubts and providing learning resources with just a click."
        />
        <SolutionCard
          icon={<FaUserCog size={40} />}
          title="Administrator (Coming Soon)"
          description="Streamlines school operations, making tasks like admissions and report generation a breeze."
        />
      </div>

      {/* Right Column - Image */}
      
    </div>
  );
};

export default OurSolutions;
