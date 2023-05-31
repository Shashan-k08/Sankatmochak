import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Spinner from '../components/spinner/Spinner'
import '../login.css'
import "../App.css"


const Navbar = (props) => {
  const navigate = useNavigate();
  const host = "https://sankatmochak-backend.onrender.com";
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const [showlog, setShowlog] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    const response = await fetch(`${host}/api/auth/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    setloading(false);
    const json = await response.json();
    
    console.log(json)
    if (json.success) {
      props.showalert("Logged-in Successfully", "success")
      // save the verification token and redirect
      setShowlog(true);
      localStorage.setItem('token', json.verificationtoken);
      handleClose();

      navigate("/");
      props.showalert("Logged-in Successfully", "success")

    }
    else {
      props.showalert("Invalid details", "danger")
    }
  }
const movesignup=()=>{
  navigate('/signup');
  handleClose();
}
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleOn = () => {
    var dis = document.getElementById('hiide').style;
    if (dis.display === "none")
      dis.display = "block";
    else
      dis.display = "none";
  }

  const handlelogout = () => {
    localStorage.removeItem('token');
    setShowlog(false)
    props.showalert("Logged-Out-Successfully", "success")

  }

  useEffect(() => {
    const abd = localStorage.getItem('token');
    if (abd)
      setShowlog(true)
    console.log(localStorage.getItem('token'))

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
  {loading ? <Spinner /> :
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sankatmochak</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <div id="login-form-wrap">
              <h2>Login as</h2>
              <form className='form2' id="login-form" onSubmit={handleLogin}>
                
                <div className="login-type">
                  <div>
                    <label>
                      <input
                        type="radio" className= "bg3"value="admin"/>Admin</label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio" className= "bg3" value="volunteer" /> Volunteer </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" className= "bg3" value="member"/>Member </label>
                  </div>
                </div>
                <p>
                  <input type="email" name="email" onChange={onChange} value={credentials.email} placeholder=" Enter your Email" required /><i class="validation" ><span></span><span></span></i>
                </p>
                <p>
                  <input type="password" id="username" onChange={onChange} name="password" value={credentials.password} placeholder="Enter your password" required /><i class="validation" ><span></span><span></span></i>
                </p>
                <p>
                  <input type="submit" className='login-but' value="Login" />
                </p>
              </form>
              <div id="create-account-wrap">
                <p> Not a member? <p  className='navb-p' onClick={movesignup}>Create Account</p></p>

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
}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" id='er'>
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">Sankatmochak</h1>

          </a>
          <button className="navbar-toggler " onClick={handleOn} type="button" >
            <span className="fa fa-bars"></span>
          </button>
          <div className=" navbar-collapse show" id="hiide" >
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <Link to="/sos" className="nav-item nav-link">SOS</Link>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Disaster-Type</a>
                <div className="dropdown-menu m-0">
                  <Link to="/info/earthquake
                  " className="dropdown-item">Earthquake</Link>
                  <a href="/info/earthquake" className="dropdown-item">Tsunami</a>
                  <a href="/info/earthquake" className="dropdown-item">Corona</a>
                  <a href="/info/earthquake" className="dropdown-item">Communal-War</a>
                  <a href="/info/earthquake" className="dropdown-item">Landsliding</a>
                </div>
              </div>
              <a href="/services" className="nav-item nav-link">Services</a>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Health Info</a>
                <div className="dropdown-menu m-0">
                  <a href="https://healthviewport.github.io/bed-tracker/" className="dropdown-item">NearBy Sankatmochak Centres</a>
                  <a href="https://healthviewport.github.io/information/" className="dropdown-item">Info about Emergency Supply</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Volunteer</a>
                <div className="dropdown-menu m-0">
                  <a href="/members/workshop" className="dropdown-item">Training & Programs</a>
                  <a href="/" className="dropdown-item">Info-Upload</a>
                  <a href="/" className="dropdown-item">Media-Sharing</a>
                  <a href="/register" className="dropdown-item">Member-Registration</a>
                </div>
              </div>
            </div>
            {!showlog ? (<div onClick={handleShow} className="btn btn-primary rounded-pill py-2 px-4">Sign-In</div>) : (<>
              <div onClick={handlelogout} className="btn btn-primary rounded-pill py-2 px-4">Logout</div> </>)}
          </div>
        </nav>


      </div>
    </>
  )
}

export default Navbar