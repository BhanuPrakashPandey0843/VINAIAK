import React from "react";
import {
  FaRobot,
  FaUserGraduate,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

const Solutions = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-gradient-to-b from-[#ECEFF4] to-[#F8D3D9]">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
        Our Solutions
      </h2>

      {/* Solution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-4">
        {/* General Assistance */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4">
            <FaRobot className="text-3xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            General Assistance
          </h3>
          <p className="text-gray-600">
            Simplify queries with AI-powered Query Bots.
          </p>
        </div>

        {/* Student Assistance */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4">
            <FaUserGraduate className="text-3xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Student Assistance
          </h3>
          <p className="text-gray-600">
            Help your students clear doubts 24/7 anytime within a few clicks.
          </p>
        </div>

        {/* Administrator Assistance */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4">
            <FaUserTie className="text-3xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Administrator (Coming Soon)
          </h3>
          <p className="text-gray-600">
            Streamline school operations, from admissions to actionable reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
