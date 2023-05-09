import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import Marquee from "react-fast-marquee";
import './Workshop.css'
const Workshop = (props) => {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
const getticket =()=>{
    props.showalert(" Thank You! ,  ticket will be send to your registered email", "success")
}
    function initializeClock(endtime) {
        var timeinterval = setInterval(function () {
            var t = getTimeRemaining(endtime);
            document.querySelector(".days > .value").innerText = t.days;
            document.querySelector(".hours > .value").innerText = t.hours;
            document.querySelector(".minutes > .value").innerText = t.minutes;
            document.querySelector(".seconds > .value").innerText = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }

    initializeClock(((new Date()).getFullYear() + 1) + "/1/1");

    return (

        <div className='wk-box'>
            <div className="program-box">
                <h4 className='txt3'>  <Marquee loop="infinite"  behavior="scroll" direction="left" scrollamount="1"><em>Training Camp and Knowledge Workshop by  Sankatmochak And Government of India</em> in your area </Marquee></h4>
                <div className="tx4">


                    <div class="counter">

                        <div class="days">
                            <div class="value">00</div>
                            <span>Days  </span>
                        </div>

                        <div class="hours">
                            <div class="value">00</div>
                            <span>Hours</span>
                        </div>

                        <div class="minutes">
                            <div class="value">00</div>
                            <span>Minutes</span>
                        </div>

                        <div class="seconds">
                            <div class="value">00</div>
                            <span>Seconds</span>
                        </div>

                    </div>
                    <div className="ticket-box">

                        <h6>Register yourself <em>get immediate</em> seat</h6>
                        <button onClick={getticket} type="submit" id="form-submit" class="button" >Get it now</button>

                    </div>
                </div>
                <div className="training-program-box">
                    <table>
                        <tr>
                            <th>Name of the Course</th>
                            <th>Venue</th>
                            <th>Starting Date of Training Programme</th>
                            <th>Ending Date of Training Programme</th>
                            <th>No. of
                                Days
                                03-05
                                Days</th>
                            <th>Course
                                Coordinator</th>
                            <th>Name of
                                Division</th>
                            <th>Name of the
                                Collaborative
                                Agency</th>
                            <th>Collaborat
                                ive Agency
                                is Govt. or
                                Private</th>
                            <th>Location/
                                Capital</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>Training Programme on Urban Disaster
                                Resilience and Climate Risk Mitigation in Cities</td>
                            <td>SPA, Bhopal</td>
                            <td>17.04.2023</td>
                            <td>19.04.2023</td>
                            <td>03 days</td>
                            <td>Prof. Anil Kumar Gupta</td>
                            <td>ECDRM Division</td>
                            <td>School of Planning &
                                Architecture, Bhopal
                                (SPA)</td>
                            <td>Govt.</td>
                            <td>Bhopal</td>
                            <td>Madhya Pradesh</td>

                        </tr>
                        <tr>
                            <td> Training Programme on Youth Action in Heat
                                Waves: Reducing Vulnerabilities Enhancing and
                                Building Resilience</td>
                            <td>MCRHRDI-Telangana</td>
                            <td>17.04.2023</td>
                            <td>21.04.2023</td>
                            <td>05 days</td>
                            <td>Dr. Kumar Raka &
                                Shri Ranjan Kumar</td>
                            <td>CCDRR Centre</td>
                            <td>MCRHRDI-Telangana</td>
                            <td>Govt.</td>
                            <td>Hyderabad</td>
                            <td>Telangana</td>
                        </tr>
                        <tr>
                            <td>State Level Consultation on "Updation of
                                Disaster Management Plans of Delhi with Focus
                                on Eartthquake and Urban & Industrial Fires</td>
                            <td>DDMA, Delhi</td>
                            <td>18.04.2023</td>
                            <td>20.04.2023 03</td>
                            <td>03 days</td>
                            <td>Dr. Garima Aggarwal</td>
                            <td>RI Division</td>
                            <td> Delhi Disaster
                                Management Authority
                                (DDMA), Delhi</td>
                            <td>Govt.</td>
                            <td>New Delhi</td>
                            <td>Delhi</td>

                        </tr>
                        <tr>
                            <td> Training Programme on Youth Action in Heat
                                Waves: Reducing Vulnerabilities, Enhancing
                                capacities and Building resilience</td>
                            <td>Madurai
                                Kamaraj
                                University
                            </td>
                            <td>24.04.2023</td>
                            <td>28.04.2023</td>
                            <td>05 days</td>
                            <td>Dr. Kumar Raka & Dr.
                                Balu I</td>
                            <td>CCDRR Centre</td>
                            <td> Madurai Kamaraj
                                University</td>
                            <td>Govt.</td>
                            <td>Madurai</td>
                            <td>Tamil Nadu</td>
                        </tr>
                        <tr>
                            <td>Training Programme on Incident Response System
                                (IRS): Basic & Intermediate
                            </td>
                            <td>Sikkim State
                                Disaster
                                Management
                                Authority
                                (SSDMA),
                                Sikkim</td>
                            <td>25.04.2023</td>
                            <td>27.04.2023</td>
                            <td>03 days</td>
                            <td>Shri Shekher
                                Chaturvedi</td>
                            <td>DR&R Division </td>
                            <td>Sikkim State Disaster
                                Management Authority
                                (SSDMA), Sikkim</td>
                            <td>Govt.</td>
                            <td>Gangtok</td>
                            <td>Sikkim</td>

                        </tr>

                        <tr>
                            <td>Training Programme on Psychosocial Care in
                                Disaster Management
                            </td>
                            <td>OSDMA,
                                Odisha</td>
                            <td>25.04.2023</td>
                            <td>27.04.2023</td>
                            <td>03 days</td>
                            <td>Dr. Ajinder Walia</td>
                            <td>GIDRR, Division</td>
                            <td>OSDMA, Odisha</td>
                            <td>Govt.</td>
                            <td> Bhubaneshwar</td>
                            <td>Odisha</td>

                        </tr>

                        <tr>
                            <td>Training Programme on Mitigation Measures for
                                Urban Resilience to Disasters
                            </td>
                            <td>Shivaji College,
                                Delhi
                                University</td>
                            <td>26.04.2023</td>
                            <td>28.04.2023</td>
                            <td>03 days</td>

                            <td>Dr. Garima Aggarwal</td>
                            <td>RI Division</td>
                            <td> Shivaji College, Delhi
                                University</td>

                            <td>Govt.</td>
                            <td>New Delhi</td>
                            <td>Delhi</td>
                        </tr>

                        <tr>
                            <td>Training Programme on Youth Action in Heat
                                Waves: Reducing Vulnerabilities, Enhancing
                                capacities and Building resilience
                            </td>
                            <td>Mahatma
                                Gandhi State
                                Institute of
                                Public
                                Administration
                                (MGSIPA)
                            </td>
                            <td>01.05.2023</td>
                            <td> 05.05.2023</td>
                            <td>05 days</td>
                            <td>Dr.Kumar
                                Raka,Dr.Balu I & Shri.
                                Ranjan kumar</td>
                            <td>CCDRR, Centre</td>
                            <td>Mahatma Gandhi State
                                Institute of Public
                                Administration(MGSIPA)</td>
                            <td>Govt.</td>
                            <td>Chandigarh</td>
                            <td>Punjab</td>

                        </tr>

                        <tr>
                            <td>Training Programme on Infrasture Resilience
                                and Food Security
                            </td>
                            <td>Assam
                                University,
                                Silchar</td>
                            <td>02.05.2023</td>
                            <td>04.05.2023</td>
                            <td>03 days</td>

                            <td>Prof. Anil Kumar
                                Gupta</td>
                            <td>ECDRM Division</td>
                            <td>Assam University, Silchar</td>
                            <td>Govt.</td>
                            <td> Silchar</td>
                            <td>Assam</td>

                        </tr>

                        <tr>
                            <td>ToT on Child Centric Disaster Risk Reduction</td>
                            <td>NIDM South
                                Campus,
                                Kondapavuluru</td>
                            <td>08.05.2023</td>
                            <td>12.05.2023</td>
                            <td>05 days</td>
                            <td>Dr. Kumar Raka & Dr.
                                Balu I</td>

                            <td>CCDRR Centre</td>
                            <td>NIDM South Campus,
                                Kondapavuluru</td>
                            <td>Govt.</td>
                            <td>Vijayawada</td>
                            <td>Andhra Pradesh</td>

                        </tr>

                        <tr>
                            <td>National Level Training on Natural and Naturebased Methods for Flood Risk Management</td>
                            <td>NIDM, New Delhi</td>
                            <td>09.05.2023</td>
                            <td>11.05.2023</td>
                            <td>03 days</td>
                            <td>Dr. Sushma Guleria</td>
                            <td>ECDRM Division</td>
                            <td>Division World Wildlife Fund
                                (WWF)</td>
                            <td>International
                                NGO</td>
                            <td>New Delhi</td>
                            <td>Delhi</td>

                        </tr>

                        <tr>
                            <td>Training Programme on Youth Leadership Meet
                                on Water Futures, with focus on water related
                                DRR issues
                            </td>
                            <td>NIDM, New
                                Delhi</td>
                            <td>16.05.2023</td>
                            <td>18.05.2023</td>
                            <td>03 days</td>
                            <td>Prof. Anil Kumar
                                Gupta</td>
                            <td>ECDRM Division</td>
                            <td>Youth4 Water, NIDM
                                New Delhi</td>
                            <td>Govt.</td>
                            <td>New Delhi</td>
                            <td>Delhi</td>
                        </tr>

                        <tr>
                            <td>ToT on Engaging Youth & Adolescents in DRM
                                & CCA
                            </td>
                            <td>Himachal
                                Pradesh
                                Institute of
                                Public
                                Administration
                                (HIPA), Shimla</td>
                            <td>23.05.2023</td>
                            <td>27.05.2023</td>
                            <td>05 days</td>
                            <td>Dr. Kumar Raka &
                                Shri Ranjan Kumar</td>
                            <td>CCDRR Centre</td>
                            <td>Himachal Pradesh
                                Institute of Public
                                Administration (HIPA),
                                Shimla</td>
                            <td>Govt.</td>
                            <td>Shimla</td>
                            <td>Himachal
                                Pradesh</td>
                        </tr>


                    </table>
                </div>
               

            </div >
        </div>
    )
}

export default Workshop