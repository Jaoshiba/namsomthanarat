import React from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Namsomkansod from './components/namsomkansod';
import LimeJuiceSection from './components/nammanowkansod';
import HoneyLimeSection from './components/honeylime';
import PackagingDetails from './components/packagingdetail';
import DeliveryAndExportModern from './components/delivery';
import BusinessAndOEM from './components/oem';
import Footer from './components/footer';
import { FaLeaf, FaSeedling, FaStar, FaCertificate, FaTag } from 'react-icons/fa';

const HeroSectionAndImage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center -z-2 "
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-24 overflow-hidden ">
          <svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f2cd83"
              fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-6xl md:text-8xl font-bold font-serif animate-fade-in-up">
              ธนรัตน์
            </h1>
            <p className="text-2xl md:text-4xl font-light mt-4 animate-fade-in-up delay-200">
              โรงงานผลิตน้ำผลไม้คุณภาพส่งออก
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
              สำรวจสินค้า
            </button>
          </div>
        </div>
      </div>


      <div className="bg-[#fff2d9] py-12 -mt-32 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            สินค้าและบริการของเรา
          </h2>
        <div className="container mx-auto pb-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <Namsomkansod />
          <LimeJuiceSection />
          <HoneyLimeSection />  
        </div> 

        <div className='width-full bg-white'>
          <PackagingDetails />
        </div>

        <div>
          <BusinessAndOEM />
        </div>

        <div>
          <DeliveryAndExportModern />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAndImage;