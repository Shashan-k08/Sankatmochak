import React from 'react'
import './Sos.css'
import { useState } from 'react';
const Sos = () => {

    const [message, setMessage] = useState('');
    const [sos, setSOS] = useState('');

    const handleSendMessage = () => {
        // Code to send message
        console.log('Sending message:', message);
        setMessage('');
    };

    const handleSendSOS = () => {
        // Code to send SOS
        console.log('Sending SOS:', sos);
        setSOS('');
    };

    return (
        <div className='sos-box'>

            <h3>Quick Services</h3>
            <div className="sos-send">
                <div className="sos-s">

                    <button onClick={handleSendMessage}>Send</button>
                </div>
                <div className='sos-m'>
                    
                   <button onClick={handleSendSOS}>Send</button>
                </div>
            </div>
        </div>


    )
}

export default Sos