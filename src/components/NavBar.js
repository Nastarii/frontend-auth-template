import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-500 p-4 fixed w-full z-10">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
            <div className='flex row overflow-hidden'>
                <p>Auth</p>
            </div>
        </Link>
        <ul className="flex space-x-4">
          <Link to="/signin">
            <li className='p-2 rounded hover:bg-blue-600  overflow-hidden shadow-lg'>
                <p className="text-gray-100 font-medium hover:text-gray-100">Sign in</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;