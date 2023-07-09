import React, {useState} from 'react';
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
            <div className='emailWidget'>
                <h2>Subscribe for more from:</h2>
                <h1>Doria</h1>
                    <input
                        className='emailInput'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <button className='buttonWidget' type='submit'>Subscribe</button>
            </div>
        </form>
    );
};

export default SubscriptionWidget;