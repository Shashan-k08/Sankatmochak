import React from 'react'
import Header from '../components/Header'
import '../App.css';
import Navbar from '../components/Navbar';
import Services from './Services';
import Donation from './Donation';
import Registration from './Registration';
import Footer from '../components/Footer';
import Volunteer from './Volunteer';
const Homepage = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ height: "400px" }}>
                            <div class="position-relative h-100">
                                {/* <img class="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style="object-fit: cover;"> */}
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 class="mb-4">Welcome to <span class="text-primary">Sankatmochak</span></h1>
                            <p class="mb-4">Welcome to our organization! We are a team dedicated to identifying high-risk disaster zones and providing emergency alerts and vital pre-information with real-time accuracy. Our collaborative efforts with government hospitals, media outlets, fire brigades, and other emergency services ensure that we can respond quickly and effectively to any disaster situation.</p>
                            <p class="mb-4">In addition to our emergency response services, we also provide temporary shelter, food banks, and health services for those affected by disasters. Our fully volunteer team in every area works tirelessly to ensure that those in need receive the care and support they require during difficult times.</p>
                            <div class="row gy-2 gx-4 mb-4">
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>First Class Volunteer Team</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Information with real-time accuracy</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>5 Star Post Disaster Management System</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Collaborative efforts with government hospitals, media outlets, fire brigades, and other emergency services</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Cover Whole Nation Under the umbrella of Sankatmochak</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <a class="btn btn-primary py-3 px-5 mt-2" href="about.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <Donation/>
            <Registration/>
            <Volunteer/>
            <Footer/>
        </>
    )
}

export default Homepage