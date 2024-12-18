import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaClock } from 'react-icons/fa';

const images = [
  require('./image1.jpg'),
  require('./image2.jpg'),
  require('./image4.jpg'),
  // Add more image paths
];

const ResponsiveCarousel = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex flex-col items-center rounded-3xl shadow-2xl">
      {/* Top Section - Rounded Container */}
      <div className="w-full max-w-[90%] h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl bg-gray-300 shadow-2xl overflow-hidden mb-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Info Section */}
      <div className="w-full max-w-[90%] bg-gradient-to-r from-blue-100 to-pink-200 text-gray-800 rounded-2xl py-8 px-6 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
              <FaUserGraduate className="text-blue-500 text-4xl" />
            </div>
            <div className="text-lg font-semibold">11 Personalized Learning</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-blue-500 text-4xl" />
            </div>
            <div className="text-lg font-semibold">Seamless Collaboration</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
              <FaChalkboardTeacher className="text-blue-500 text-4xl" />
            </div>
            <div className="text-lg font-semibold">3x Teaching Efficiency</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
              <FaClock className="text-blue-500 text-4xl" />
            </div>
            <div className="text-lg font-semibold">Unlock Time, Unlock Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
