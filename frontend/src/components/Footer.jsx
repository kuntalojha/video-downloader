import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 h-20 ">
      <div className="mx-4 sm:mx-[10%] h-full flex justify-center items-center text-center">
        <p className="text-sm text-gray-800">
          &copy; {new Date().getFullYear()} Video Downloader. All rights
          reserved. <br />
          Download videos from YouTube, Facebook, Instagram & more.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
