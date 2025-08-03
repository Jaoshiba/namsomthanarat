// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaSeedling, FaStar, FaCertificate, FaTag } from 'react-icons/fa';

const Namsomkansod = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-4xl drop-shadow-xl/25 group">
      {/* Background Image with zoom on hover */}
      <Image
        src="/orangejuicefromfarm.jpg"
        alt="น้ำส้มคั้นสด"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay with a darker hover state */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0 transition-all duration-500 group-hover:bg-black/70"></div>

      {/* Content Section with a subtle slide-up on hover */}
      <div className="relative z-20 flex items-end w-full h-full p-8 md:p-12 text-white transition-transform duration-500 group-hover:-translate-y-4">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-[2.25rem] font-bold font-playfair-display mb-4 tracking-wide leading-tight">
            🧃 น้ำส้มคั้นสด 100% สูตรธรรมชาติ
          </h2>
          <ul className="text-lg md:text-xl font-inter space-y-3 md:space-y-4">
            <li className="flex items-start">
              <FaSeedling className="mt-1 mr-3 text-orange-400 flex-shrink-0" size={20} />
              <span>ผลิตจากส้มเขียวหวานพันธุ์ดีจาก “สวนสุโขทัย”</span>
            </li>
            <li className="flex items-start">
              <FaLeaf className="mt-1 mr-3 text-green-500 flex-shrink-0" size={20} />
              <span>ไม่ใส่น้ำตาล ไม่เจือสี ไม่แต่งกลิ่น</span>
            </li>
            <li className="flex items-start">
              <FaTag className="mt-1 mr-3 text-orange-400 flex-shrink-0" size={20} />
              <span>ไม่มีสารกันบูดหรือหัวเชื้อ</span>
            </li>
            <li className="flex items-start">
              <FaStar className="mt-1 mr-3 text-yellow-400 flex-shrink-0" size={20} />
              <span>มี เนื้อส้มแท้ – เกล็ดส้มแท้ ในน้ำส้มทุกขวด</span>
            </li>
            <li className="flex items-start">
              <FaCertificate className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={20} />
              <span>ได้รับเครื่องหมาย ฮาลาล, GMP, อย.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Namsomkansod;