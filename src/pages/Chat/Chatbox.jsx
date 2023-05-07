import React from 'react'

const Chatbox = () => {
  return (
    <div>
         <div class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> Chatbot</h1>
      <a href="index.html" class="btn">Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-comments"></i> Room Name:</h3>
        <h2 id="room-name">floods</h2>
        <h3><i class="fas fa-users"></i>Volunteers</h3>
        <ul id="users">
          <li>Narendra</li>
          <li>Akash</li>
          <li>Vikas</li>
          <li>Shashank</li>
          <li>yash</li>
        </ul>
      </div>
      <div class="chat-messages">
					<div class="message">
						<p class="meta">Ayush <span>9:12pm</span></p>
						<p class="text">
						When Will Food Provides for us?
						</p>
					</div>
					<div class="message">
						<p class="meta">Vikas <span>9:15pm</span></p>
						<p class="text">
							as usual 8 pm
						</p>
					</div>
      </div>
    </main>
    <div class="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="on"
        />
        <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Chatbox