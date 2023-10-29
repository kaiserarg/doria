import React, { useState } from 'react';
import '../index.css';

const SubscriptionWidget = () => {
    const [email, setEmail] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5000/subscribe', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ email }) 
          });
          
          if (response.status === 200) {
            alert('Email subscribed successfully');
            setEmail("");
          } else {
            alert('Something went wrong');
          }
        } catch (error) {
            console.error('Error:', error);
            alert('Error subscribing email: ' + error.message);
          }
      };
    

      return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-lg p-10 m-4 bg-gray-800 rounded-lg shadow-lg text-white">
                <form onSubmit={handleSubmit}>
                    <p className="mb-6 text-2xl font-semibold text-center tracking-wide text-gray-300">Join Party Games with Friends!</p>
                    <p className="mb-8 text-center text-gray-400 leading-relaxed">
                        Doria transports the classic party game vibe into the pulsating heart of cyberspace. Challenge friends or 
                        engage with global competitors in our wide spectrum of immersive games. Are you ready to light up the party?
                    </p>
                    <div className="flex flex-col space-y-4">
                        <input
                            className="input input-bordered w-full " 
                            name='Email'
                            placeholder='Enter Email Address'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="btn btn-primary">Join the Waitlist</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionWidget;