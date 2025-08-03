import React from 'react';
import Image from 'next/image';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <button className="lg:hidden text-gray-800 focus:outline-none mr-4">
            <Menu size={24} />
          </button>
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/logothanarat.png" // แก้ไข path ไปยังโลโก้ของคุณ
              alt="Thanarat Logo"
              width={100}
              height={100}
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8 text-lg">
          <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
            สินค้า
          </a>
          <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
            บริการ
          </a>
          <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
            เกี่ยวกับเรา
          </a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
            ติดต่อ
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-orange-500 transition-colors duration-300 focus:outline-none">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-orange-500 transition-colors duration-300 focus:outline-none">
            <User size={20} />
          </button>
          <button className="text-gray-600 hover:text-orange-500 transition-colors duration-300 focus:outline-none relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;