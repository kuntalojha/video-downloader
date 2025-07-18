import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <img src="" alt="logo" />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>1</div>
    </div>
  );
};

export default Navbar;
