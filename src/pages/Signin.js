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

        setTimeout(() => {
            window.location.href = '/protected';
        }, 1000);
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
          <div className="flex items-center justify-center min-h-screen bg-white">
            <form className="bg-white p-8 rounded shadow-lg w-96 z-10 flex flex-col items-start" onSubmit={handleSubmit}>
              <h3 className="text-2xl text-gray-800 font-bold mb-4">Sign In</h3>
              <div className="w-full mb-4">
                <label htmlFor="usercredential" className="block text-gray-700 flex self-start">Username or Email:</label>
                <input
                  type="text"
                  id="usercredential"
                  value={usercredential}
                  onChange={handleUsercredentialChange}
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

              <div className="mb-4 flex">
                <input
                  type="checkbox"
                  id="remember"
                  value={password}
                  onChange={handlePasswordChange}
                  className="accent-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700 text-sm flex">Remember me</label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-center"
              >
                { loading ?
                  <img src="loading-spinner.gif" className='w-8 h-8' alt="Loader"></img>:
                  "Sign In"
                }
              </button>
              <Link to="/recoverPassword" className='text-gray-700 mt-3 flex self-end underline'>
                Forgot your password?
              </Link>
              <p className={status ? 'text-green-500 m-3': 'text-red-500 mt-3'}>{userResponse ? userResponse:''}</p>
              {resendEmailButton && <div className='text-red-500 underline cursor-pointer mb-3' onClick={handleResendEmail}> Resend Confirmation Email </div>}
              <p className='text-gray-700 mt-3 self-center'> Don't you have an account? <Link to="/signup"><p className='underline text-gray-800' >Create here</p></Link></p>
          </form>
        </div>
      </div>
    );
}

export default Signin;
