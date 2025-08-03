// components/BusinessAndOEM.js
import React from 'react';
import Image from 'next/image';
import { FaHandshake, FaSeedling, FaPalette, FaTruck } from 'react-icons/fa';

const BusinessAndOEM = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Column: Business Opportunity Text with animations */}
      <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 opacity-0 animate-slide-in-left">
        <h2 className="text-3xl font-bold font-playfair-display text-orange-600 mb-6 animate-fade-in-up">
          💼 โอกาสสร้างรายได้เสริมและเริ่มต้นธุรกิจ
        </h2>
        <p className="text-lg text-gray-700 mb-4 animate-fade-in-up-delay-1">
          ธนรัตน์เปิดโอกาสให้คุณเริ่มต้นง่ายๆ
        </p>
        <ul className="text-lg text-gray-700 space-y-3">
          <li className="flex items-start opacity-0 animate-fade-in-up-delay-2">
            <FaHandshake className="mt-1 mr-3 text-orange-500 flex-shrink-0" size={20} />
            <span>ลงทุนน้อย ขายง่าย กำไรดี</span>
          </li>
          <li className="flex items-start opacity-0 animate-fade-in-up-delay-3">
            <FaSeedling className="mt-1 mr-3 text-green-500 flex-shrink-0" size={20} />
            <span>เหมาะกับผู้ที่ทำงานประจำ หรืออยากเริ่มธุรกิจส่วนตัว</span>
          </li>
          <li className="flex items-start opacity-0 animate-fade-in-up-delay-4">
            <FaTruck className="mt-1 mr-3 text-blue-500 flex-shrink-0" size={20} />
            <span>มีทีมงานให้คำปรึกษาการขาย การสร้างแบรนด์ และการตลาด</span>
          </li>
        </ul>
        <div className="mt-6 opacity-0 animate-fade-in-up-delay-5">
          <h4 className="text-md font-semibold text-gray-500">SEO Keywords:</h4>
          <p className="text-sm text-gray-500">ขายน้ำส้มรายได้เสริม, เริ่มต้นธุรกิจน้ำผลไม้, ธุรกิจส่งออกน้ำผลไม้, ตัวแทนจำหน่ายน้ำผลไม้ไทย</p>
        </div>
      </div>

      {/* Right Column: OEM/ODM Image and Text with animations and hover */}
      <div className="relative rounded-xl shadow-lg overflow-hidden h-[400px] md:h-full group opacity-0 animate-slide-in-right">
        <Image
          src="/oem.jpg" // Replace with your OEM/ODM image path
          alt="รับสร้างแบรนด์ (OEM / ODM)"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Black Overlay with hover effect */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/60"></div>
        {/* Text Overlay with animations */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 p-6 z-20 flex flex-col justify-end text-white">
          <h3 className="text-3xl font-bold font-sans mb-2 opacity-0 animate-fade-in-up-delay-6">
            🧃 รับสร้างแบรนด์ (OEM / ODM)
          </h3>
          <p className="text-2xl mb-2 opacity-0 animate-fade-in-up-delay-7">
            ธุรกิจเครื่องดื่มพร้อมดื่มเริ่มต้นที่นี่
          </p>
          <ul className="text-2xl space-y-2 mb-2">
            <li className="opacity-0 animate-fade-in-up-delay-8">รับผลิตน้ำส้ม-น้ำมะนาวคั้นสดในแบรนด์ของคุณ</li>
            <li className="flex items-start opacity-0 animate-fade-in-up-delay-9">
              <FaPalette className="mt-1 mr-3 text-white flex-shrink-0" size={20} />
              <span>ออกแบบขวด / ฉลาก / โลโก้ / สติ๊กเกอร์</span>
            </li>
            <li className="opacity-0 animate-fade-in-up-delay-10">แนะนำสูตร รสชาติ และรูปแบบที่เหมาะกับตลาดเป้าหมาย</li>
            <li className="opacity-0 animate-fade-in-up-delay-11">ส่งออกในชื่อแบรนด์ของลูกค้าทั่วเอเชีย</li>
          </ul>
          <div className="mt-4 opacity-0 animate-fade-in-up-delay-12">
            <h4 className="text-xs font-semibold text-gray-300">SEO Keywords:</h4>
            <p className="text-xs text-gray-300">OEM น้ำส้ม, ODM น้ำมะนาว, รับผลิตน้ำผลไม้แบรนด์ลูกค้า, โรงงานน้ำผลไม้ส่งออก, ธุรกิจสร้างแบรนด์น้ำผลไม้</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAndOEM;