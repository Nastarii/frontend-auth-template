import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    const [usercredential, setUsercredential] = useState('');
    const [userResponse, setUserResponse] = useState(false);
    const [resendEmailButton, setResendEmailButton] = useState(false); // [1] on, [0] off
    const [loading, setLoading] = useState(false); // [1] on, [0] off
    const [status, setStatus] = useState(false); // [1] Success, [0] Failed
    const [password, setPassword] = useState('');
    const [ip, setIp] = useState("");

    const handleUsercredentialChange = (e) => {
      setUsercredential(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleResendEmail = async (e) => {
      setLoading(true);
      e.preventDefault();
      
      const resendEmailData = {
        email: usercredential,
      };

      const response = await fetch('http://127.0.0.1:3000/email/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resendEmailData),
      })

      const responseData = await response.json();
      setUserResponse(responseData.msg);
      setResendEmailButton(false);
      setLoading(false);
      setStatus(false);
    }

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      const signinData = {
        usercredential: usercredential,
        password: password,
        ip:ip
      };

      const response = await fetch('http://127.0.0.1:3000/sign/in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signinData),
      })

      const responseData = await response.json();

      if (response.status === 200) {
        localStorage.setItem('token', responseData.token);
        setStatus(true);
      } 
      
      if (responseData.msg === 'Client email not verified') {
        setResendEmailButton(true);
      } else {
        setResendEmailButton(false);
      }

      setUserResponse(responseData.msg);
      setLoading(false);
    };

    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(results => results.json())
        .then(data => setIp(data.ip))
    }, [])

    return (
      <div>
        { loading ?
          <img src="loading-spinner.gif" alt="Loader"></img>:
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <img src="background.png" alt="Background" className='absolute h-screen w-screen '></img>
            <form className="bg-white p-8 rounded shadow-md max-w-md z-10" onSubmit={handleSubmit}>

              <div className="mb-4">
                <label htmlFor="usercredential" className="block text-gray-700">Username or Email:</label>
                <input
                  type="text"
                  id="usercredential"
                  value={usercredential}
                  onChange={handleUsercredentialChange}
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
              <p className={status ? 'text-green-500 m-3': 'text-red-500 m-3'}>{userResponse ? userResponse:''}</p>
              {resendEmailButton && <div className='text-red-500 underline cursor-pointer' onClick={handleResendEmail}> Resend Confirmation Email </div>}
              <p className='text-gray-700 mt-3'> Doesn't have account yet? <Link to="/signup"><p className='underline text-gray-800' >Create an Account</p></Link></p>
              <p className='text-gray-700 mt-3'> Forgot your password? <Link to="/recoverPassword"><p className='underline text-gray-800' >Click Here to recover it</p></Link></p>
          </form>
        </div>
        }
      </div>
    );
}

export default Signin;
