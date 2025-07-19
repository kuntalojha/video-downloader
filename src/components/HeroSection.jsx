import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { ImYoutube2 } from 'react-icons/im';
import { RiFacebookCircleLine } from 'react-icons/ri';

const HeroSection = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 flex justify-center items-center">
        <div className="grid gap-10">
          <FaInstagram size={50} color="red" />
          <ImYoutube2 size={50} color="red" />
          <RiFacebookCircleLine size={50} color="blue" />
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-center">
          Download All Types of Videos Here
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
