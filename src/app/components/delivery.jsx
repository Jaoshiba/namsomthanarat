// components/DeliveryAndExportModern.js
import React from 'react';
import Image from 'next/image';
import { FaTruck, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const DeliveryAndExportModern = () => {
  return (
    <div className="container mx-auto px-4 py-16 h-svh w-fit">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair-display text-gray-800 tracking-tight">
          🚚 ระบบการจัดส่งและบริการส่งออก
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          ครอบคลุมทุกพื้นที่ทั่วประเทศ พร้อมมาตรฐานการส่งออกระดับสากล
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: จุดกระจายสินค้า */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="/delivery-points.jpg" // แทนที่ด้วยรูปภาพที่เกี่ยวข้อง
            alt="จุดกระจายสินค้า"
            width={600}
            height={400}
            objectFit="fill"
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-3xl text-orange-400 mr-4" />
              <h3 className="text-2xl font-bold font-sans">จุดกระจายสินค้า</h3>
            </div>
            <ul className="text-base space-y-1 mt-4">
              <li><strong className="font-semibold">กรุงเทพฯ:</strong> ตลิ่งชัน, พุทธมณฑลสาย 1–2, บางนา</li>
              <li><strong className="font-semibold">ภาคเหนือ:</strong> สุโขทัย, พะเยา</li>
              <li><strong className="font-semibold">ภาคอีสาน:</strong> สระบุรี, ขอนแก่น, อุดรธานี</li>
              <li><strong className="font-semibold">ภาคใต้:</strong> ตรัง, ประจวบคีรีขันธ์</li>
            </ul>
          </div>
        </div>

        {/* Card 2: การส่งออก */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="/export.jpg" // แทนที่ด้วยรูปภาพที่เกี่ยวข้อง
            alt="บริการส่งออก"
            layout="fill"
            objectFit="fill"
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <div className="flex items-center mb-2">
              <FaGlobe className="text-3xl text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold font-sans">การส่งออก</h3>
            </div>
            <ul className="text-base space-y-1 mt-4">
              <li>บรรจุภัณฑ์ตามมาตรฐานส่งออก</li>
              <li>ระบบขนส่งห่วงโซ่เย็น (Cold Chain)</li>
              <li>พร้อมเอกสาร CO, Health Certificate</li>
              <li>รองรับตลาดจีนและเอเชีย</li>
            </ul>
          </div>
        </div>

        {/* Card 3: รายละเอียดการขนส่ง */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src="/cold-chain.jpg" // แทนที่ด้วยรูปภาพที่เกี่ยวข้อง
            alt="ระบบขนส่งห่วงโซ่เย็น"
            layout='fill'   
            objectFit="fill"
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <div className="flex items-center mb-2">
              <FaTruck className="text-3xl text-green-400 mr-4" />
              <h3 className="text-2xl font-bold font-sans">มาตรฐานการขนส่ง</h3>
            </div>
            <ul className="text-base space-y-1 mt-4">
              <li>การจัดส่งด้วยรถควบคุมอุณหภูมิ</li>
              <li>บริการโลจิสติกส์ส่งออก</li>
              <li>รองรับออเดอร์ขนาดเล็ก (ขั้นต่ำ 50 ขวด)</li>
              <li>มั่นใจในความสดใหม่ถึงมือลูกค้า</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeliveryAndExportModern;