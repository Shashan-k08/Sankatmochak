import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import './Chat.css'
const Chat = () => {
  return (
    <>
    <div className="chat-wrap">
    <Header/>
    <Navbar/>
    <div class="join-container">
			<header class="join-header">
				<h1><i class="fas fa-smile"></i> Chat with your Local Volunteer</h1>
			</header>
			<main class="join-main">
				<form action="chat.html">
					<div class="form-control">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
						/>
					</div>
					<div class="form-control">
						<label for="room">Room</label>
						<select name="room" id="room">
							<option value="#">Earthquake</option>
							<option value="#">Flood</option>
							<option value="#">Fire</option>
							<option value="#">Tornado</option>
							<option value="#">Heatwave</option>
							<option value="#">Volcano</option>
						</select>
					</div>
					<button type="submit" class="btn">Join Chat</button>
				</form>
			</main>
		</div>
    
    </div>
   
    
  </>
  )
}

export default Chat