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
import Banner from './components/banner';
import FactoryInfo from './components/quality';
import AboutUsSection from './components/halal';
import { FaLeaf, FaSeedling, FaStar, FaCertificate, FaTag } from 'react-icons/fa';

const HeroSectionAndImage = () => {
  return (
    <div>
      
      <div>
        <Banner />
      </div>

      


      <div className="bg-[#fff2d9] py-12 ">
        <div>
          <FactoryInfo />
        </div>
        <div>
          <AboutUsSection />
        </div>
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