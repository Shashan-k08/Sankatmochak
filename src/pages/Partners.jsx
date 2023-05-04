import React from 'react'
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';
const Partners = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Partner-Guide</h6>
                        <h1 className="mb-5">Meet Our Partners</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team1} alt="" />
                                </div>

                                <div className="text-center p-4">
                                    <h5 className="mb-0">Government of India</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team2} alt="" />
                                </div>

                                <div className="text-center p-4">
                                    <h5 className="mb-0">World Health Organisation</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team3} alt="" />
                                </div>


                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ministry of Health and welfare</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={team4} alt="" />
                                </div>

                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ministry Of Defence</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners