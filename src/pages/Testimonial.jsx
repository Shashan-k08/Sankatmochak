import React from 'react'
import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
import testimonial4 from '../img/testimonial-4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonial = () => {
  // const testimonialCarousel = document.querySelector('.testimonial-carousel');

  // if (testimonialCarousel) {
  //   const owl = new OwlCarousel(testimonialCarousel, {
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     center: true,
  //     margin: 24,
  //     dots: true,
  //     loop: true,
  //     nav: false,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       768: {
  //         items: 2
  //       },
  //       992: {
  //         items: 3
  //       }
  //     }
  //   });
  // }


  return (

    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
            <h1 className="mb-5" >Our feedbacks</h1>
          </div>
          <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={5} autoplay ={true}>
         

              <div className="item testimonial-item item bg-white text-center border p-4">
                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" alt='' src={testimonial1} style={{ width: "80px", height: "80px" }} />
                <h5 className="mb-0">Narendra Modi</h5>
                <p>Prime Minister</p>
                <p className="mb-0">Your efforts have made a significant impact in ensuring the safety and well-being of individuals and communities affected by disasters. Thank you for your dedication and hard work!</p>
              </div>
              <div className="item testimonial-item bg-white text-center border p-4">
                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" alt='' src={testimonial2} style={{ width: "80px", height: "80px" }} />
                <h5 className="mb-0">Rajnath Singh</h5>
                <p>Defence Minister, India</p>
                <p className="mt-2 mb-0">Great job to the team for their commitment to helping during disasters and providing real-time and accurate information to those in need</p>
              </div>

              <div className="item testimonial-item bg-white text-center border p-4">
                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" alt='' src={testimonial3} style={{ width: "80px", height: "80px" }} />
                <h5 className="mb-0">Ratan Tata</h5>
                <p>Former chairman of Tata Sons.</p>
                <p className="mt-2 mb-0"> Your efforts have helped countless individuals stay safe and informed in times of crisis. Keep up the excellent work!</p>
              </div>
              <div className="item testimonial-item bg-white text-center border p-4">
                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" alt='' src={testimonial4} style={{ width: "80px", height: "80px" }} />
                <h5 className="mb-0">Admiral R. Hari Kumar</h5>
                <p>The Chief of the Naval Staff</p>
                <p className="mt-2 mb-0">Great job! Your team's dedication to providing accurate and timely information during disasters is truly invaluable.</p>
              </div>
           
          </OwlCarousel>
        </div>
      </div>

    
    </>
  )
}

export default Testimonial