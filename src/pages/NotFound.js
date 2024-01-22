import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <div className='w-6/12 flex flex-col items-center justify-center z-10'>
                <img src="gears-not-found.gif" className='w-48' alt="Index gif" />
                <h1 className="text-4xl font-medium text-gray-800 mb-4"> 404 PAGE NOT FOUND</h1>
                <p className="text-gray-600 mb-8">Go back to home</p>
                <Link to="/">
                    <div className='p-2 w-20 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>    
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
