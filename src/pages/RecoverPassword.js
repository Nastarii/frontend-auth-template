import React, { useState } from 'react';

function RecoverPassword() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(false); // [1] Success, [0] Failed
    const [loading, setLoading] = useState(false); // [1] on, [0] off
    const [userResponse, setUserResponse] = useState('');
    const [resendEmailButton, setResendEmailButton] = useState(false); // [1] on, [0] off

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResendEmail = async (e) => {
      setLoading(true);
      e.preventDefault();
      
      const resendEmailData = {
        email: email,
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

      const recoverPasswordData = {
        email: email,
      };

      const response = await fetch('http://127.0.0.1:3000/email/recover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recoverPasswordData),
      })

      const responseData = await response.json();

      if (response.status === 200) {
        //localStorage.setItem('token', responseData.token);
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


    return (
      <div>
        { loading ?
          <img src="loading-spinner.gif" alt="Loader"></img>:
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <img src="background.png" alt="Background" className='absolute h-screen w-screen '></img>
            <form className="bg-white p-8 rounded shadow-md max-w-md z-10" onSubmit={handleSubmit}>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                RecoverPassword
              </button>
              <p className={status ? 'text-green-500 m-3': 'text-red-500 m-3'}>{userResponse ? userResponse:''}</p>
              {resendEmailButton && <div className='text-red-500 underline cursor-pointer' onClick={handleResendEmail}> Resend Confirmation Email </div>}
          </form>
        </div>
        }
      </div>
    );
}

export default RecoverPassword;
