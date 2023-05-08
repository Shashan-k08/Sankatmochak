import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import './Info.css'
const Info = () => {
    return (
        <div class="container4" >
            <Header />
            <Navbar />

            <div class="info-heading">
                <h2>Update News Alert and Information of your area</h2>
            </div>



            <form className='info-box-form'>
               
                    <div class="info-form-input">

                        <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required="" />

                    </div>
                    <div class="info-form-input">

                        <input name="email" type="text" class="form-control" id="email" placeholder="Your email" required="" />

                    </div>
                    <div class="info-form-message">

                        <textarea name="message"  class="form-control" id="Subject" placeholder="Subject"
                            required=""></textarea>

                        <h6> Upload the information in pdf or docx format only</h6>

                        <input name="Upload Saved Replay" type="file" accept="application/pdf,application/msword,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document" />

                    </div>
                    <div class="info-form-button">

                        <button type="submit" id="form-submit" class="button">Send Message Now</button>

                    </div>

            </form>


            <Footer />
        </div >
    )
}

export default Info