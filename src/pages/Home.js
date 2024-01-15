import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className='w-6/12 flex flex-col items-center justify-center'>
                <img src="catapult.gif" alt="Index gif" />
                <h1 className="text-4xl font-light text-indigo-900 mb-4">Congratulations! Your authentication app is now installed and ready to be launched!</h1>
                <p className="text-gray-600 mb-8">Explore the amazing features we offer and join our community.</p>
            </div>

            {/* About Us Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-5">About Us</h2>
                <p className="text-gray-600">
                    We are a passionate team dedicated to providing an exceptional experience for our users. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
        </div>
    );
}

export default Home;
