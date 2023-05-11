import React from 'react'
import about1 from '../img/about.jpg';
const About = () => {
  return (
    <div>
         <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ height: "400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={about1} alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className="text-primary">Sankatmochak</span></h1>
                            <p className="mb-4">Welcome to our organization! We are a team dedicated to identifying high-risk disaster zones and providing emergency alerts and vital pre-information with real-time accuracy. Our collaborative efforts with government hospitals, media outlets, fire brigades, and other emergency services ensure that we can respond quickly and effectively to any disaster situation.</p>
                            <p className="mb-4">In addition to our emergency response services, we also provide temporary shelter, food banks, and health services for those affected by disasters. Our fully volunteer team in every area works tirelessly to ensure that those in need receive the care and support they require during difficult times.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Volunteer Team</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Information with real-time accuracy</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Post Disaster Management System</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Collaborative efforts with government hospitals, media outlets, fire brigades, and other emergency services</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Cover Whole Nation Under the umbrella of Sankatmochak</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="about.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About