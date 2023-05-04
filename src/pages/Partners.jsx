import React from 'react'
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';
const Partners = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="section-title bg-white text-center text-primary px-3">Partner-Guide</h6>
                        <h1 class="mb-5">Meet Our Partners</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src={team1} alt="" />
                                </div>

                                <div class="text-center p-4">
                                    <h5 class="mb-0">Government of India</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src={team2} alt="" />
                                </div>

                                <div class="text-center p-4">
                                    <h5 class="mb-0">World Health Organisation</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src={team3} alt="" />
                                </div>


                                <div class="text-center p-4">
                                    <h5 class="mb-0">Ministry of Health and welfare</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="team-item">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src={team4} alt="" />
                                </div>

                                <div class="text-center p-4">
                                    <h5 class="mb-0">Ministry Of Defence</h5>

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