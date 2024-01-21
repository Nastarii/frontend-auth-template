import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ip, setIp] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const signinData = {
          username: username,
          password: password,
          ip:ip
        };

        fetch('http://localhost:3000/sign/in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signinData),
        });
    };

    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(results => results.json())
        .then(data => setIp(data.ip))
    }, [])

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img src="background.png" alt="Background" className='absolute h-screen w-screen '></img>
        <form className="bg-white p-8 rounded shadow-md max-w-md z-10" onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username or Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
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
            Sign in
          </button>
          
          <p className='text-gray-700 mt-3'> Doesn't have account yet? <Link to="/signup"><p className='underline text-gray-800' >Create an Account</p></Link></p>
      </form>
    </div>
    );
}

export default Signin;
