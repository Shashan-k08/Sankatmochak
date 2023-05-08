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
        <div className='sos-box fl-c'>

            <h3>Quick Services</h3>
            <div className="sos-send fl-r">
                <div className="sos-s">

                    <button className='btn-glow' onClick={handleSendMessage}>Send<br/> <b> SOS</b></button>
                </div>
                <div className='sos-m'>
                    
                   <button className='btn-glow2' onClick={handleSendSOS}>Send <br/> <b>MMS</b> </button>
                </div>
            </div>
        </div>


    )
}

export default Sos