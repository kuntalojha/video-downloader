import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-gray-300 z-50 shadow-md">
      <Navbar />
    </div>
  );
};

export default Header;
