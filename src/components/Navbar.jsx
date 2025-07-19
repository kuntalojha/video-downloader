import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 font-bold ">
      <div>
        <Link to={'/'}>
          <img src={assets.logo} className="h-10 cursor-pointer" alt="logo" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to={'/'}>Home</Link>
        <Link to={'https://kuntalojha.github.io/MRKUNTALOJHA/'}>About Me</Link>
      </div>
      <div>
        <Link to={'https://github.com/kuntalojha'} target="_blank">
          <FaGithub size={35} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
