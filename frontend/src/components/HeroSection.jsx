import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { ImYoutube2 } from 'react-icons/im';
import { RiFacebookCircleLine } from 'react-icons/ri';

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Top Section: Icons */}
      <div className="flex justify-center gap-8 py-10">
        <FaInstagram size={50} color="red" />
        <ImYoutube2 size={50} color="red" />
        <RiFacebookCircleLine size={50} color="blue" />
      </div>

      {/* Bottom Section: Text */}
      <div className="flex justify-center items-center px-4 py-10">
        <h1 className="text-xl md:text-3xl font-bold text-center">
          Download All Types of Videos Here
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
