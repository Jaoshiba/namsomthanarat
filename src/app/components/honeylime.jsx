// components/HoneyLimeSection.js
import React from 'react';
import Image from 'next/image';
import { FaLemon, FaHeart, FaShippingFast, FaCheckCircle } from 'react-icons/fa';
import { AiFillContainer } from 'react-icons/ai'; // Corrected import for a jar-like icon

const HoneyLimeSection = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-4xl drop-shadow-xl/25 group">
      {/* Background Image with hover effect */}
      <Image
        src="/honeylime.jpg"
        alt="น้ำผึ้งมะนาว"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay with hover effect */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0 transition-all duration-500 group-hover:bg-black/70"></div>

      {/* Content Section with load-in animation */}
      <div className="relative z-20 flex items-end w-full h-full p-8 md:p-12 text-white">
        <div className="max-w-4xl animate-fade-in-up">
          <h2 className="text-3xl md:text-[2.25rem] font-bold font-playfair-display mb-4 tracking-wide leading-tight">
            🍯 น้ำผึ้งมะนาวแท้ สูตรธรรมชาติ
          </h2>
          <ul className="text-lg md:text-xl font-inter space-y-3 md:space-y-4">
            <li className="flex items-start">
              <AiFillContainer className="mt-1 mr-3 text-yellow-400 flex-shrink-0" size={20} />
              <span>ผลิตจากน้ำผึ้งแท้ 100% จากสวนธรรมชาติ</span>
            </li>
            <li className="flex items-start">
              <FaLemon className="mt-1 mr-3 text-yellow-400 flex-shrink-0" size={20} />
              <span>ใช้น้ำมะนาวคั้นสด รสชาติกลมกล่อม</span>
            </li>
            <li className="flex items-start">
              <FaHeart className="mt-1 mr-3 text-yellow-400 flex-shrink-0" size={20} />
              <span>สดชื่น แก้กระหาย ให้ความชุ่มคอ</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-3 text-white flex-shrink-0" size={20} />
              <span>ไม่ใส่สารกันเสีย ไม่แต่งกลิ่น</span>
            </li>
            <li className="flex items-start">
              <FaShippingFast className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={20} />
              <span>พร้อมส่งสำหรับธุรกิจร้านอาหารและคาเฟ่</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoneyLimeSection;