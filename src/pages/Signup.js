import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'

function Signup() {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
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

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleAgeChange = (e) => {
    var today = new Date();
    var birthDate = new Date(e.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() <= birthDate.getDate())) {
      age--;
    }
    setBornDate(e.target.value);
    setAge(age);
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

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const registerData = {
      name: name,
      lastName: lastName,
      address: address,
      age: age,
      phone: phone,
      companyName: companyName,
      username: username,
      email: email,
      password: password
    }
    
    const response = await fetch('http://127.0.0.1:3000/register/in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify(registerData),
    });
    const responseData = await response.json();
    if (response.status === 200) {
      localStorage.setItem('token', responseData.token);
    }
    setLoading(false);
  };

  return (
    <div>
    <div className="flex items-start justify-center min-h-screen bg-white pt-20">
      <form className="bg-white p-8 rounded shadow-lg max-w-lg z-10 flex flex-col items-start" onSubmit={handleSubmit}>
        <h3 className="text-2xl text-gray-800 font-bold mb-4">Sign Up</h3>
        <div className="grid grid-cols-2 gap-4 mb-4 w-full">
          <div>
            <label htmlFor="name" className="block text-gray-700 flex self-start">First Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700 flex self-start">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 w-full">
          <div>
            <label htmlFor="username" className="block text-gray-700 flex self-start">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-gray-700 flex self-start">Company Name:</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleCompanyNameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        
        <div className="w-full mb-4">
          <label htmlFor="address" className="block text-gray-700 flex self-start">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-gray-700 flex self-start">Phone Number:</label>
            <PhoneInput
              specialLabel=''
              inputStyle={{height:'43px', width:'100%', border:'1px solid #e5e7eb'}}  
              country={'br'}
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div>
            <label htmlFor="bornDate" className="block text-gray-700 flex self-start">Date of Birth:</label>
            <input
              type="date"
              id="bornDate"
              value={bornDate}
              onChange={handleAgeChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-gray-700 flex self-start">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="password" className="block text-gray-700 flex self-start">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 items-center justify-center"
        >
          {loading ? <img src="loading-spinner.gif" className='w-8 h-8' alt="Loader"></img>:"Sign Up"}
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;
