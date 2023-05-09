import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Register</h6>
                                <h1 className="text-white mb-4"> Volunteer Registration form</h1>
                                <p className="mb-4">Serious action taken  against you if any information provided by you will found fake or biased.</p>
                                <p className="mb-4"> <b>Why not consider becoming a volunteer today? Not only will you be making a positive impact on the lives of others, but you'll also be investing in your own future with the benefits of a certificate of volunteerism. </b></p>
                                <a className="btn btn-outline-light py-3 px-5 mt-2" href="/">Read More</a>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Let's start</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Age</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" name="gender" id="select1">
                                                    <option selected>Select gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                <label htmlFor="select1">Gender</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" id="select1">
                                                    <option value="1">Aadhar Number</option>
                                                    <option value="2">Pan Number</option>
                                                    <option value="3">Voter's Id Number</option>
                                                </select>
                                                <label htmlFor="select1">Authentication</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                                <label htmlFor="message"></label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration