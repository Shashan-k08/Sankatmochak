import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Services = () => {
    let navigate = useNavigate();
    const movechat = () => {
        navigate('/chat')
    }

    const moveshop = () => {
        navigate("/members/workshop")
    }
    const moveinfo = () => {
        navigate("/info/message")
    }

    const moveearth = () => {
        navigate("/info/earthquake")
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
                                    <p>Get Information about deliver emergency supplies such as food, water, and medical equipment to your area </p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3" onClick={moveearth}>
                                <div className="p-4">
                                    <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                                    <h5> Status of Red Zone Regions</h5>
                                    <p> a comprehensive list of high-risk disaster areas with real-time accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Volunteer Section</h5>
                                    <p>Work with Sankatmochak and get certified. Work for Humanity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3" onClick={moveinfo}>
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>Sankatmochak Khoya-Paya Segment</h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4" onClick={movechat}>
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5>Interaction area</h5>
                                    <p>Submit Information about diaster or ask any thing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <a href="/" >   <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                        <h5>Donation Box</h5>
                                        <p>The meaning of life is to find your gift. The purpose of life is to give it away.</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4" onClick={moveshop}>
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <a href='localhost:3000/members/workshop'>  <h5>Workshops and trainee calender</h5></a>
                                    <p>Important date about Preparing, learning skill in high risk regions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp pointer" data-wow-delay="0.7s">
                          <a href='https://healthviewport.github.io/bed-tracker/'>  <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>  Nearby Sankatmochak Centres</h5>
                                    <p>Information of all essential things like first aid and other emergency response and active teams.</p>
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