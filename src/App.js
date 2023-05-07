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
import Chatbox from './pages/Chat/Chatbox';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
