import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <img src="background.png" className='absolute h-screen w-screen '></img>
            <div className='w-6/12 flex flex-col items-center justify-center z-10'>
                <img src="catapult.gif" alt="Index gif" />
                <h1 className="text-4xl font-light text-blue-800 mb-4">Congratulations! Your authentication app is now installed and ready to be launched!</h1>
                <p className="text-gray-600 mb-8">Explore the amazing features we offer and join our community.</p>
            </div>

            {/* About Us Section */}
            <section className=" py-10 z-10">
                <div className="container mx-auto flex justify-around">
                <a href="https://github.com/Nastarii/auth" target="_blank">    
                    {/* Documentation Card */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl text-blue-800 mb-2">Documentation</div>
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
                        <div className="font-bold text-xl text-blue-800 mb-2">Contact Me</div>
                        <p className="text-gray-700 text-base">
                            Have questions or need assistance? Feel free to reach out through my email.
                        </p>
                        </div>
                    </div>
                </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
