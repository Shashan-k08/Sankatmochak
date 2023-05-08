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
import Chatbox from './pages/Chat/Chatbox';
import Earthmore from './components/earthquake/Earthmore';
import Earthquake from './components/earthquake/Earthquake';
import Workshop from './components/workshop/Workshop';
import VolunteerInfo from './components/volunteer/VolunteerInfo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/chatbox' element={<Chatbox/>} />
          <Route exact path='/members/workshop' element={<Workshop/>} />
          <Route exact path='/info/earthquake' element={<Earthquake/>} />
          <Route exact path='/info/message' element={<Info/>} />
          <Route exact path='/info/volunteer' element={<VolunteerInfo/>} />
          <Route exact path='/info/earthquake/earthmore' element={<Earthmore/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
