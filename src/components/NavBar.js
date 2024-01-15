import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 p-4 fixed w-full">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
            <div className='flex row'>
                <img src="/logo192.png" alt="logo" className="h-8 inline mr-2" />
                <p className="text-white font-black italic text-sm self-center">CATAPULT</p>
            </div>
        </Link>
        <ul className="flex space-x-4">
          <Link to="/login">
            <li className='bg-gray-800 p-2 rounded hover:bg-gray-900'>
                <p className="text-white font-medium hover:text-gray-100">Log in</p>
            </li>
          </Link>
          <Link to="/signin">
            <li className='bg-gray-100 p-2 rounded hover:bg-gray-200'>
                <p className="text-gray-800 font-medium hover:text-gray-900">Sign in</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;