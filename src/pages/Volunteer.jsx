import React from 'react'

const Volunteer = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Volunteer</h6>
                        <h1 className="mb-5">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-globe fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Register</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0"> If you are 18+ then you are able to  register yourself and give entrance test.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-globe fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Pass Entrance fitness test and start training</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">After passing entrance fitness test, as a Volunteer your training get start. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-globe fa-3x text-white"></i>
                                </div>
                                <h5 className="mt-4">Now you are volunteer</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Get your Id as a Sankatmochak Volunteer which gives you 10% quota in every government jobs, sports and in colleges</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Volunteer