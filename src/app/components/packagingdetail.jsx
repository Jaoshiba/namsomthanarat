// components/PackagingDetails.js
import React from 'react';
import Image from 'next/image';

const PackagingDetails = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-svh ">
        {/* Left Column: Image with hover effect */}
        <div className="relative w-full h-full md:h-full group">
          <Image
            src="/packaging-image.png" // Replace with your image path
            alt="Packaging and Products"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Right Column: Table with hover effect */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-sans text-gray-800 mb-6">
            📦 บรรจุภัณฑ์และขนาดสินค้า
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-600">ประเภท</th>
                  <th className="py-3 px-4 font-semibold text-gray-600">ขนาด</th>
                  <th className="py-3 pl-4 font-semibold text-gray-600">รายละเอียด</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 transition-colors duration-200 hover:bg-orange-50">
                  <td className="py-4 pr-4">น้ำส้มคั้นสด</td>
                  <td className="py-4 px-4">120ml / 150ml / 250ml / 500ml / 1L</td>
                  <td className="py-4 pl-4">ขวดทรงสวย สีฝาเลือกได้</td>
                </tr>
                <tr className="border-b border-gray-200 transition-colors duration-200 hover:bg-orange-50">
                  <td className="py-4 pr-4">น้ำมะนาวคั้นสด</td>
                  <td className="py-4 px-4">250ml / 500ml / 1L</td>
                  <td className="py-4 pl-4">สำหรับใช้ครัวเรือน ร้านอาหาร หรือส่งออก</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            **สั่งขั้นต่ำ 50 ขวด / จัดส่งด้วยรถควบคุมอุณหภูมิ หรือบริการโลจิสติกส์ส่งออก
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagingDetails;