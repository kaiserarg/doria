import React, {useState} from 'react';
import dorialogo from "../assets/doria-icon.png";
import doriatext from "../assets/doria-text.png"
import '../index.css';

const SubscriptionWidget = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email', email);

        setEmail('');
    };

    return (
        <form onSubmit={{handleSubmit}}>
            <div className='wrapper'>
                <div className='text-0'>
                    <img className='logo' src={dorialogo} alt="Doria Logo" />
                    <img className='title' src={doriatext} alt="Doria Text" />
                </div>
                <div className='mainBody'>
                    <h2 className='text-1'>Doria | Web-based PvP Games</h2>
                    <h1 className='text-2'>Doria is a website that host a collection of online PVP games</h1>
                    <h1 className='text-3'>Join the waitlist</h1>
                    <h3 className='text-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <input
                        className='emailInput'
                        name='Email'
                        placeholder='Email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <button className='btn' type='submit'>Subscribe</button>
                </div>
            </div>
        </form>
    );
};

export default SubscriptionWidget;