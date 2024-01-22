import React, { useState } from 'react';

function ActivationCode() {
    const [activationCode, setActivationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [status, setStatus] = useState(false); // [1] Success, [0] Failed
    const [loading, setLoading] = useState(false); // [1] on, [0] off
    const [userResponse, setUserResponse] = useState('');

    const handleActivationCodeChange = (e) => {
        setActivationCode(e.target.value);
    };

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      const activationCodeData = {
        activationCode: activationCode,
      };

      const response = await fetch('http://127.0.0.1:3000/email/verify/activationCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(activationCodeData),
      })

      const responseData = await response.json();

      if (response.status === 200) {
        setNewPassword(responseData.newPassword);
        setStatus(true);
      } 


      setUserResponse(responseData.msg);
      setLoading(false);
    };


    return (
      <div>
          <div className="flex items-center justify-center min-h-screen bg-white">
            <form className="bg-white p-8 rounded shadow-md max-w-md z-10" onSubmit={handleSubmit}>
              <h3 className="text-2xl text-gray-800 font-bold mb-4 flex self-start">Forgot Password</h3>
              <div className="mb-4">
                <label htmlFor="activationCode" className="block text-gray-700 flex self-start">Activation Code:</label>
                <input
                  type="text"
                  id="activationCode"
                  value={activationCode}
                  onChange={handleActivationCodeChange}
                  className="w-full px-3 py-2 border text-blue-500 font-bold rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-2 px-4 rounded-full hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-center"
              >
                { loading ?
                  <img src="loading-spinner.gif" className='w-8 h-8' alt="Loader"></img>:
                  "Verify"
                }
              </button>
              <p className={status ? 'text-green-500 m-3': 'text-red-500 m-3'}>{userResponse}</p>
              {status && `Your new password is: ${newPassword}`}
          </form>
        </div>
      </div>
    );
}

export default ActivationCode;
