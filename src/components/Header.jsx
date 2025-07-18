import React from 'react';
import Navbar from './Navbar';
const Header = () => {
  return (
    <div className="bg-gray-300 ">
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <h1>Header</h1>
      </div>
    </div>
  );
};

export default Header;
