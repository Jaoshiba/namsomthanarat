// components/Footer.js
import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLine, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold font-sans text-orange-600 mb-2">
            บริษัท ธนรัตน์ รุ่งเรืองน้ำทิพย์ จำกัด
          </h3>
          <p className="text-sm">
            ผลิตและจำหน่ายน้ำผลไม้คั้นสดคุณภาพ
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">📞 ติดต่อเรา</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaPhone className="text-orange-600 mr-2" />
              <a href="tel:0948959369" className="hover:text-white transition-colors duration-200">094-895-9369</a>, <a href="tel:020028020" className="ml-1 hover:text-white transition-colors duration-200">02-002-8020</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-orange-600 mr-2" />
              <a href="mailto:thanarat4598@gmail.com" className="hover:text-white transition-colors duration-200">thanarat4598@gmail.com</a>
            </li>
            <li className="flex items-center">
              <FaGlobe className="text-orange-600 mr-2" />
              <a href="https://www.namsomthanarat.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">www.namsomthanarat.com</a>
            </li>
            <li className="flex items-center">
              <FaLine className="text-green-500 mr-2" />
              <span>@thanarat</span>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">📍 สำนักงานใหญ่</h3>
          <p className="text-sm">
            45/9 หมู่ 8 ถนนอบจ.นนทบุรีสายเลียบคลองลำรี ต.ละหาร อ.บางบัวทอง จ.นนทบุรี
          </p>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">📌 โซเชียลมีเดีย</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-600 transition-colors duration-200">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors duration-200">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors duration-200">
              <FaYoutube size={24} />
            </a>
          </div>
          <p className="text-sm mt-2">
            น้ำส้มคั้นสด ธนรัตน์
          </p>
        </div>

      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; 2024 บริษัท ธนรัตน์ รุ่งเรืองน้ำทิพย์ จำกัด. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;