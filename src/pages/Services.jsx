import React from 'react'
import { useNavigate } from 'react-router-dom';
const Services = () => {
    let navigate = useNavigate();
    const movechat = () => {
        navigate('/chat')
    }
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="mb-5">Select a Option</h1>
                    </div>
                    <div className="row g-4" >
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5> Information About Emergency Supplies </h5>
                                    <p>Get Information about deliver emergency supplies such as food, water, and medical equipment to your area </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-hotel text-primary mb-4"></i>
                                    <h5> Status of Red Zone Regions</h5>
                                    <p> a comprehensive list of high-risk disaster areas with real-time accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Volunteer Section</h5>
                                    <p>Work with Sankatmochak and get certified. Work for Humanity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>Real time Information</h5>
                                    <p>All Real Time information about diaster and management by Sankatmochak</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4" onClick={movechat}>
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5>Interaction area</h5>
                                    <p>Submit Information about diaster or ask any thing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <a href="/" >   <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                        <h5>Donation Box</h5>
                                        <p>The meaning of life is to find your gift. The purpose of life is to give it away.</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4"></i>
                                    <h5>Workshops and trainee calender</h5>
                                    <p>Important date about Preparing, learning skill in high risk regions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4"></i>
                                    <h5>Sankatmochak Local center management</h5>
                                    <p>Information of all essential things like first aid and other emergency response and active teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services