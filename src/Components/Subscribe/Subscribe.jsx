 import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubscribe = () => {
    if (!email) {
      setMessage({ type: 'error', text: '⚠️ Please enter your email!' });
    } else {
      // future me yahan API call bhi kar sako gi
      setMessage({ type: 'success', text: '✅ Subscribed successfully!' });
      setEmail('');
    }
  };

  return (
    <div data-aos="zoom-in" className='mb-20 bg-slate-700 dark:bg-gray-800 text-white'>
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
            Get Notified About New Products
          </h1>

          <div className="flex gap-2">
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              className='w-full p-3 text-black rounded'
            />
            <button
              onClick={handleSubscribe}
              className='bg-primary px-4 py-2 rounded text-white'
            >
              <a href="/#"> Subscribe</a>
            </button>
          </div>

          {message && (
            <div className={`text-sm mt-2 ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
