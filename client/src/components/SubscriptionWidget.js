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
            <div className='wrapper-1'>
                <div className='text-0'>
                    <img className='logo' src={dorialogo} alt="Doria Logo" />
                    <img className='title' src={doriatext} alt="Doria Text" />
                </div>
                    <div className='subWrapper-1'>
                        <div className='text-1'>Doria | Web-based PvP Games</div>
                        <div className='text-2'>Doria is a website that host a collection of online PVP games</div>
                        <div className='text-3'>Join the waitlist</div>
                    </div>
                    <div className='text-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className='subWrapper-2'>
                        <div className='emailInput'>
                            <input
                                name='Email'
                                placeholder='Email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='btn'>
                            <button type='submit'>Join the Waitlist</button>
                        </div> 
                    </div>
                </div>
        </form>
    );
};

export default SubscriptionWidget;