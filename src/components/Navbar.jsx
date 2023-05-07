import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../login.css'


const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const handleOn=()=>{
  var dis = document.getElementById('hiide').style;
  if(dis.display==="none")
  dis.display="block";
  else
  dis.display="none";
}

  useEffect(() => {

   window.addEventListener('scroll', function () {
      var elements = document.getElementsByClassName("navbar");
      var i

      if (window.pageYOffset > 45) {

        for (i = 0; i < elements.length; i++) {
          elements[i].classList.add('sticky-top', 'shadow-sm');
        }

      } else {

        for (i = 0; i < elements.length; i++) {
          elements[i].classList.remove('sticky-top', 'shadow-sm');
        }

      }
    });
  }
    , [])
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sankatmochak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <div id="login-form-wrap">
              <h2>Login</h2>
              <form className='form2' id="login-form">
               
                <p>
                  <input type="email" id="email" name="email" placeholder=" Enter your Email" required/><i class="validation" ><span></span><span></span></i>
                </p>
                <p>
                  <input type="password" id="username" name="username" placeholder="Enter your password" required/><i class="validation" ><span></span><span></span></i>
                </p>
                <p>
                  <input type="submit" id="login" value="Login" />
                </p>
              </form>
              <div id="create-account-wrap">
                <p> Not a member? <a href="/signup">Create Account</a></p>

              </div>
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" id='er'>
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">Sankatmochak</h1>

          </a>
          <button className="navbar-toggler "  onClick={handleOn} type="button" >
            <span className="fa fa-bars"></span>
          </button>
          <div className=" navbar-collapse show" id="hiide" >
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/" className="nav-item nav-link">About</a>
              <a href="/" className="nav-item nav-link">Services</a>
              <a href="/" className="nav-item nav-link">Packages</a>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="/" className="dropdown-item">Destination</a>
                  <a href="/" className="dropdown-item">Booking</a>
                  <a href="/" className="dropdown-item">Travel Guides</a>
                  <a href="/" className="dropdown-item">Testimonial</a>
                  <a href="/" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="/" className="nav-item nav-link">Contact</a>
            </div>
            <div onClick={handleShow} className="btn btn-primary rounded-pill py-2 px-4">Register</div>
          </div>
        </nav>

       
      </div>
    </>
  )
}

export default Navbar