import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white p-4 fixed w-full shadow-sm z-30">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
            <div className='flex row overflow-hidden'>
                <img src="logo192.png" alt="Company Logo" className='w-8'></img>
            </div>
        </Link>
        <ul className="flex space-x-4">
          <Link to="/signin">
          <li className='p-2 rounded border border-blue-400 hover:bg-blue-400 overflow-hidden text-blue-400 font-medium hover:text-gray-50'>
            Sign in
          </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;