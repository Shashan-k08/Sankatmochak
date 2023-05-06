import './index.css'
import './App.css';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>



        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
