// components/FullWidthBanner.js
import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden drop-shadow-lg">
      <Image
        src="/bannernamsom_enhanced.png"
        alt="โรงงานธนรัตน์ขายส่งน้ำส้มคั้นสดและน้ำมะนาวคั้นสด"
        width={1920} // กำหนดความกว้างตามความละเอียดของรูปภาพ
        height={1080} // กำหนดความสูงตามความละเอียดของรูปภาพ
        layout="responsive"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Banner;