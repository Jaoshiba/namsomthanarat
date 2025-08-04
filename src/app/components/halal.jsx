"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAward, FaSeedling } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/halal1.jpg',
  '/halal2.jpg',
];

const AboutUsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[80vh] flex items-center">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            
            <h2 className="text-lg text-gray-700 mb-4">
              เรามุ่งมั่นในการผลิตน้ำผลไม้ที่สดใหม่และมีคุณภาพสูง
              โดยใส่ใจในทุกขั้นตอนการผลิตเพื่อให้ได้ผลิตภัณฑ์ที่ดีที่สุดสำหรับทุกคน
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaAward className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600">ได้รับรองมาตรฐาน Halal ระดับสากล</h3>
                  <p className="text-gray-700">มั่นใจได้ในกระบวนการผลิตที่สะอาดและถูกต้องตามหลักศาสนา</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <FaSeedling className="text-orange-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600">ใช้วัตถุดิบธรรมชาติ 100%</h3>
                  <p className="text-gray-700">จากผลไม้ที่คัดสรรมาอย่างดี ไม่ใส่สารกันบูดหรือสารปรุงแต่ง</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-svh md:h-svh rounded-xl shadow-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Product image ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 900) 100vw, 50vw"
                className="object-contain"
                priority={currentImageIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;