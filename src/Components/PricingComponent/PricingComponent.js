import React from "react";

const PricingComponent = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 mt-8">
    {/* Pricing Heading */}
    <div className="text-left mb-12 self-start pl-8 md:pl-16 lg:pl-32">
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold text-gray-900">Pricing</h1>
      <p className="text-gray-500 text-lg md:text-xl mt-4 max-w-xl">
        A flexible, out-of-the-box platform with pricing to meet your needs.
      </p>
    </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-end gap-8 px-4">
      {/* Starter Plan */}
<div className="bg-gradient-to-br from-pink-400 to-blue-300 rounded-t-full rounded-b-lg shadow-2xl p-8 w-80 h-[28rem] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Starter</h2>
  <p className="text-4xl font-extrabold text-gray-900 mb-2">Rs. 8999</p>
  <p className="text-gray-700 mb-6 text-lg">For 3 months</p>
  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200">
    Book a Demo
  </button>
  <p className="text-gray-500 text-sm mt-4">
    *Setup Cost of Rs. 750 (one-time)
  </p>
</div>


       {/* Pro Plan */}
<div className="bg-gradient-to-br from-pink-400 to-blue-300 rounded-t-full rounded-b-lg shadow-2xl p-8 w-96 h-[32rem] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pro</h2>
  <p className="text-5xl font-extrabold text-gray-900 mb-2">Rs. 17999</p>
  <p className="text-gray-700 mb-6 text-lg">For 6 months</p>
  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200">
    Book a Demo
  </button>
  <p className="text-gray-500 text-sm mt-4">
    *Setup Cost of Rs. 750 (one-time)
  </p>
</div>

{/* Enterprise Plan */}
<div className="bg-gradient-to-br from-pink-400 to-blue-300 rounded-t-full rounded-b-lg shadow-2xl p-8 w-[28rem] h-[36rem] flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
  <h2 className="text-3xl font-semibold text-gray-900 mb-4">Enterprise</h2>
  <p className="text-6xl font-extrabold text-gray-900 mb-2">Rs. 33999</p>
  <p className="text-gray-700 mb-6 text-lg">For 12 months</p>
  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200">
    Book a Demo
  </button>
  <p className="text-gray-500 text-sm mt-4">
    *Setup Cost of Rs. 750 (one-time)
  </p>
</div>




      </div>
    </div>
  );
};

export default PricingComponent;
