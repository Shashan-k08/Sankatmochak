import React from 'react'
import './Sos.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Sos = (props) => {
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const [message, setMessage] = useState('');
    const [sos, setSOS] = useState('');

    const handleSendMessage = () => {
        // Code to send message
        props.showalert("ACESS:Denied - Admin Access Only", "danger")
        console.log('Sending message:', message);
        setMessage('');
    };
    const handleSendSOS = () => {
        // Code to send SOS
        navigate1('/info-message')
        props.showalert("ACESS - Provided ", "success")
       
        console.log('Sending SOS:', sos);
       
        setSOS('');
    };
    const movesos = () => {
        navigate('/sos')
    }
   

    return (
        <div className='sos-box fl-c' >

            <h3 onClick={movesos}>Quick Services</h3>
            <div className="sos-send fl-r">
                <div className="sos-s">

                    <button className='btn-glow' onClick={handleSendMessage}>Send<br /> <b> SOS</b></button>
                </div>
                <div className='sos-m'>

                    <button className='btn-glow2' onClick={handleSendSOS}>Send <br /> <b>MMS</b> </button>
                </div>
            </div>
        </div>


    )
}

export default Sos