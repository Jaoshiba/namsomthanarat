// components/LimeJuiceSection.js
import React from 'react';
import Image from 'next/image';
import { FaLemon, FaShippingFast, FaCheckCircle, FaGlobeAsia, FaTag } from 'react-icons/fa';

const LimeJuiceSection = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-4xl drop-shadow-xl/25 group">
      {/* Background Image with hover effect */}
      <Image
        src="/limejuice.jpg"
        alt="น้ำมะนาวคั้นสด"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Black Overlay (Starts at 40% from top) with hover effect */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0 transition-all duration-500 group-hover:bg-black/70"></div>

      {/* Content Section (Positioned Above Overlay) with load-in animation */}
      <div className="relative z-20 flex items-end w-full h-full p-8 md:p-12 text-white">
        <div className="max-w-4xl animate-fade-in-up">
          <h2 className="text-3xl md:text-[2.25rem] font-bold font-playfair-display mb-4 tracking-wide leading-tight">
            🍋 น้ำมะนาวคั้นสดเกรดส่งออก
          </h2>
          <ul className="text-lg md:text-xl font-inter space-y-3 md:space-y-4">
            <li className="flex items-start">
              <FaLemon className="mt-1 mr-3 text-green-400 flex-shrink-0" size={20} />
              <span>ผลิตจากมะนาวแป้นไทย คั้นสดใหม่ทุกวัน</span>
            </li>
            <li className="flex items-start">
              <FaTag className="mt-1 mr-3 text-green-400 flex-shrink-0" size={20} />
              <span>รสเปรี้ยวเข้มข้น กลิ่นหอมธรรมชาติ</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="mt-1 mr-3 text-white flex-shrink-0" size={20} />
              <span>ไม่เติมน้ำ ไม่ใส่น้ำตาล ไม่เจือสี</span>
            </li>
            <li className="flex items-start">
              <FaShippingFast className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={20} />
              <span>พร้อมสำหรับใช้ในเครื่องดื่ม / อาหาร / ส่งออก</span>
            </li>
            <li className="flex items-start">
              <FaGlobeAsia className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={20} />
              <span>พร้อมส่งออกตลาดจีน / ผู้ซื้อกลุ่ม HORECA และ B2B ทั่วเอเชีย</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LimeJuiceSection;