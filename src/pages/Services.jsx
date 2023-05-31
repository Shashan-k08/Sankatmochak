import React from 'react'
import { useEffect } from 'react';
import WOW from 'wowjs';
import { useNavigate,Link } from 'react-router-dom';
import '../App.css'
const Services = (props) => {
    let navigate = useNavigate();


    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    const movechat = () => {
        if (localStorage.getItem('token'))
            navigate('/chat')
        else {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
    }

    const moveshop = () => {
        if (localStorage.getItem('token'))
            navigate("/members/workshop")
        else {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
    }
    const moveinfo = () => {
        if (localStorage.getItem('token'))
            navigate("/info/message")
        else {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
    }

    const moveearth = () => {
        if (localStorage.getItem('token'))
            navigate("/info/earthquake")
        else {
            props.showalert("ACESS:Denied - Login Required", "danger")
        }
    }

    return (
        <>
            <div className="container-xxl svc py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp pointer" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="mb-5">Select a Option</h1>
                    </div>
                    <div className="row g-4" >
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.1s">
                            <a href='https://healthviewport.github.io/information/'>   <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4 pointer"></i>
                                    <h5> Information About Emergency Supplies </h5>
                                    <p>Get Information about emergency supplies such as Bed availability,Medical equipment ,Food etc in Nearby Sankatmochak Centres</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3" onClick={moveearth}>
                                <div className="p-4">
                                    <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                                    <h5> Status of Red Zone Regions</h5>
                                    <p>Just share your location and get the list of high-risk Disasters with real-time accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.5s">
                            <a href='https://healthviewport.github.io/volunteer/'>  <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Volunteer Section</h5>
                                    <p> List of active Volunteers in your area and Volunteer registration section</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3" onClick={moveinfo}>
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>Sankatmochak Khoya-Paya Segment</h5>
                                    <p> This service is to Help in finding the lost or missing persons  in the disasters</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4" onClick={movechat}>
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5>Interaction area</h5>
                                    <p>Chat spport for the memebers through their local Volunteers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <a href="/" >   <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                        <h5>Fake news Detection</h5>
                                        <p>This service is detect the circulation of fake news at the time of Disasters</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4" onClick={moveshop}>
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <Link  to='/members/workshop'>  <h5>Workshops and trainee calender</h5></Link>
                                    <p>Get the information of the running programs and Wrokshops in your area.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.7s">
                            <a href='https://healthviewport.github.io/bed-tracker/'>  <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>  Nearby Sankatmochak Centres</h5>
                                    <p>Just locate and get the Information of all essential things like first aid and other emergency response and active teams in your area.</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services