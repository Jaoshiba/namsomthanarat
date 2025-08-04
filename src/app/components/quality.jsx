// components/FactoryInfo.js
import React from 'react';
import Image from 'next/image';

const FactoryInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair-display">
          โรงงานผลิตน้ำส้มคั้นสดมีเนื้อส้มแท้ 100% แบบออแกนิก
        </h2>
      </div>

      {/* Main Image Section with hover effect */}
      <div className="relative w-full h-full/2 md:h-[900px] rounded-3xl overflow-hidden shadow-2xl group">
        <Image
          src="/lineorder.jpg" // เปลี่ยนรูปภาพได้ตามต้องการ
          alt="โรงงานผลิตน้ำส้มคั้นสด"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/30"></div>
      </div>
    </div>
  );
};

export default FactoryInfo;