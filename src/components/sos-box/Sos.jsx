import React from 'react'
import './Sos.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Sos = (props) => {
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const [message, setMessage] = useState('');
    const [sos, setSOS] = useState('');
    const [currentPosition, setCurrentPosition] = useState(null);
    const [emd, setemd] = useState(false)

    const handleSendSOS = () => {
        // Code to send message
        if (localStorage.getItem('token'))
        {
            props.showalert("ACESS:Denied - Admin Access Only", "danger")
            console.log('Sending message:', message);
            setMessage('');
        }
        else
        {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
      
    };
    const handleSendMessage = () => {
        if (localStorage.getItem('token')) {

            navigate1('/info-message')
            props.showalert("ACESS - Provided ", "success")
            console.log('Sending SOS:', sos);
            setSOS('');
        }
        else {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
        // Code to send SOS

    };
    const movesos = () => {
        navigate('/sos')
    }

    const showambu = () => {
        setemd(true);
        props.showalert("Request raised Successfully", "success")
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition(position);
                console.log(position)

            },
            (error) => {

                console.log(error);
            }
        );
    }, [])



    return (
        <div className='sos-box fl-c' >

            <h3 onClick={movesos}>Quick Services</h3>
            <div className="sos-send fl-r">
                <div className="sos-s">

                    <button className='btn-glow' onClick={handleSendSOS}>Send<br /> <b> SOS</b></button>
                </div>
                <div className='sos-m'>

                    <button className='btn-glow2' onClick={handleSendMessage}>Send <br /> <b>MMS</b> </button>
                </div>
            </div>
            <div className="ambu fl-c">
                <h5> Tap for Ambulance Support</h5>
                <button className='ambu-support btn-glow' onClick={showambu}>  <b>AMBULANCE </b> </button>
                {emd && <div className="userdata fl-c">
                    <h5>Your Location detected</h5>
                    <div className="loca">Lattitude={currentPosition.coords.latitude} <br />Longitude={currentPosition.coords.longitude} </div>
                    <h7>Reaching to You in 15 min</h7>
                </div>}
            </div>
        </div>


    )
}

export default Sos