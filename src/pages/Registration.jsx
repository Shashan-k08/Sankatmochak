import React from 'react'

const Registration = () => {
  return (
    <>
     <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="booking p-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-6 text-white">
                        <h6 class="text-white text-uppercase">Register</h6>
                        <h1 class="text-white mb-4">Registration form</h1>
                        <p class="mb-4">Serious action taken  against you if any information provided by you will found fake or biased.</p>
                        <p class="mb-4">Access to emergency alerts, resources, and support during disasters, and the ability to quickly communicate with family and friends.</p>
                        <a class="btn btn-outline-light py-3 px-5 mt-2" href="/">Read More</a>
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-white mb-4">Let's start</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control bg-transparent" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control bg-transparent" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" class="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Age</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select bg-transparent" id="select1">
                                            <option value="1">Aadhar Number</option>
                                            <option value="2">Pan Number</option>
                                            <option value="3">Voter's Id Number</option>
                                        </select>
                                        <label for="select1">Authentication</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control bg-transparent" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label for="message"></label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-light w-100 py-3" type="submit">Submit</button>
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