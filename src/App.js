import './index.css'
import './App.css';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/signup/Signup.jsx';
import Chat from './pages/Chat/Chat';
import Info from './components/info/Info.jsx';
import Alert from '../src/components/Alert';
import Chatbox from './pages/Chat/Chatbox';
import { useState } from 'react';
import Earthmore from './components/earthquake/Earthmore';
import Earthquake from './components/earthquake/Earthquake';
import Workshop from './components/workshop/Workshop';
import VolunteerInfo from './components/volunteer/VolunteerInfo';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Footer from './components/Footer';

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
      <Alert alert={alert} />
      <Header/>
      <Navbar  showalert={showalert} />
        <Routes>
          <Route path='/' element={<Homepage showalert={showalert} />} />
          <Route exact path='/login' element={<Login showalert={showalert} />} />
          <Route exact path='/signup' element={<SignUp showalert={showalert} />} />
          <Route exact path='/chat' element={<Chat showalert={showalert} />} />
          <Route exact path='/services' element={<Services showalert={showalert} />} />
          <Route exact path='/testimonials' element={<Testimonial showalert={showalert} />} />
          <Route exact path='/chatbox' element={<Chatbox showalert={showalert}/>} />
          <Route exact path='/members/workshop' element={<Workshop showalert={showalert}/>} />
          <Route exact path='/info/earthquake' element={<Earthquake showalert={showalert}/>} />
          <Route exact path='/info/message' element={<Info showalert={showalert}/>} />
          <Route exact path='/info/volunteer' element={<VolunteerInfo showalert={showalert}/>} />
          <Route exact path='/info/earthquake/earthmore' element={<Earthmore showalert={showalert}/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
