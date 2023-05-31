import React from 'react'
import { useState } from 'react';
import './signup.css';
import Spinner from '../spinner/Spinner'


import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email:"",password:"",state:"" })
    const host = "https://sankatmochak-backend.onrender.com/api/auth/signUp";
    const [loading, setloading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
         const { name, email,password,state } = credentials;
         setcredentials({name:"",email:"",password:""})
        const response = await fetch(host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  name, email,password,state})
        })
        setloading(false);
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.verificationtoken);
            navigate("/");
            props.showalert("Account created Successfully", "success")
        }
        else {
            props.showalert("Invalid credentials", "danger")
        }
    }
    const onchange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
    return (<div className='sign-wrap'>
            
            <div className='bx-1'>
            <div class="signup-box">
                <h1>Join Us</h1>

                <form>
                {loading && <Spinner /> }
                    <label>Name</label>
                    <input type="text" onChange={onchange} placeholder="Enter your name" name='name' />
                    <label>Select the state you belong</label>
                    <select name="state" onChange={onchange} id="state" className='stateinput'>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>

                    <label>Email</label>
                    <input type="email" onChange={onchange} placeholder="Enter your email" required min={12} name="email" />
                    <label>Password</label>
                    <input type="password" onChange={onchange} placeholder="minimum 8 characters" required min={8} name="password" />
                    <label>Confirm Password</label>
                    <input type="password"  placeholder="comfirm password" required min={8} name="cpass" />

                </form>
                <button onClick={handleSubmit}>Submit</button>
                <p class="para-2"> Already have an account? </p>
                <a href="/">Login here</a>
            </div>

        </div>
        
        </div>
    )
}

export default Signup