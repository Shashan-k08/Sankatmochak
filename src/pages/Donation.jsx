import React from 'react'
import img1 from '../img/destination-1.jpg'
import img2 from '../img/destination-2.jpg'
import img3 from '../img/destination-3.jpg'
import img4 from '../img/destination-4.jpg'
const Donation = () => {
    return (
        <>
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href="/">
                                        <img className="img-fluid" src={img1} alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">2018</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Kerala floods</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href="/">
                                        <img className="img-fluid" src={img2} alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">2001</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Gujarat Earthquake</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href="/">
                                        <img className="img-fluid" src={img3} alt="" />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">2014</div>
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Kashmir Floods </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href="/">
                                <img className="img-fluid position-absolute w-100 h-100" src={img4} alt="" style={{ backgroundSize: "cover" }} />
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">2004</div>
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indian Ocean Tsunami</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donation