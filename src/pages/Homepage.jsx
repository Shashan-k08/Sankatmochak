import React from 'react'
import '../App.css';
import Services from './Services';
import Donation from './Donation';
import Registration from './Registration';
import Volunteer from './Volunteer';
import Partners from './Partners';
import Testimonial from './Testimonial';
import Heroheader from '../components/Heroheader';
import Sos from '../components/sos-box/Sos';
import Marquee from '../components/Marqueep';
import About from '../components/About';
// import Loader from '../components/Loader';
const Homepage = (props) => {
    return (
        <>
           
            <Heroheader/>
            <Sos showalert={props.showalert}/>
            <Marquee showalert={props.showalert}/>
            <Services showalert={props.showalert} />
            <Donation />
            <Registration showalert={props.showalert} />
            <Volunteer showalert={props.showalert} />
            <Partners />
            <Testimonial/>
           <About/>
        </>
    )
}

export default Homepage