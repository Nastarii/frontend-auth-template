import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [companyName, setCompanyName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleBornDateChange = (e) => {
        setBornDate(e.target.value);
    }
    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your Signin logic here
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img src="background.png" className='absolute h-screen w-screen '></img>
        <form className="bg-white p-8 rounded shadow-md max-w-md z-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">First Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bornDate" className="block text-gray-700">Date of Birth:</label>
            <input
              type="date"
              id="bornDate"
              value={bornDate}
              onChange={handleBornDateChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700">Company Name:</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleCompanyNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
};

export default Signup;
