import React, { useState, useEffect } from 'react';

function Protected() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/signin';
        } else {
            setLoading(false);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/signin';
    }

    return (
        <div>
            {loading ? 
            <div className='flex items-center justify-center'>
                <img src="loading-spinner.gif" className='w-24' alt="Loader"></img>
            </div>
            :
            <div className="bg-white min-h-screen flex flex-col items-center justify-center">
                <div className='w-6/12 flex flex-col items-center justify-center z-10'>
                    <img src="animation-rocket.gif" className='w-48' alt="Index gif" />
                    <h1 className="text-3xl font-medium text-gray-800 mb-4">Congratulations! Your are inside a protected route</h1>
                    <div className='p-2 rounded border border-blue-400 cursor-pointer hover:bg-blue-400 overflow-hidden text-blue-400 font-medium hover:text-gray-50' onClick={handleSignOut}>
                        Sign out
                    </div>
                </div>

                {/* About Us Section */}
                <section className=" py-10 z-10">
                    <div className="container mx-auto flex justify-around">
                    <a href="https://github.com/Nastarii/auth" target="_blank" rel="noreferrer">    
                        {/* Documentation Card */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl text-gray-800 mb-2">Documentation</div>
                            <p className="text-gray-700 text-base">
                                See the documentation for detailed insights about this service.
                            </p>
                            </div>
                        </div>
                    </a>

                    <a href="mailto:lucasnabas@hotmail.com"> 
                        {/* Contact Card */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl text-gray-800 mb-2">Contact Me</div>
                            <p className="text-gray-700 text-base">
                                Have questions or need assistance? Feel free to reach out through my email.
                            </p>
                            </div>
                        </div>
                    </a>
                    </div>
                </section>
            </div>
            }
        </div>
    );
}

export default Protected;