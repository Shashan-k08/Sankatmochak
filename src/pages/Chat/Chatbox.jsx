import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Chat.css';
import io from 'socket.io-client';
import { nanoid } from "nanoid";


const socket = io.connect("https://backendhhhjkjj.onrender.com")
const Username = nanoid(4);

const Chatbox = () => {
  const [message, setmessage] = useState('');
  const [chat, setchat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, Username });
    setmessage('');
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setchat([...chat, payload])
    })
  })

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
        </main>
        <div class="chat-messages">
          <div>
            <ul>
              {chat.map((payload, index) => {
                return (
                  <p key="index"><span> Shashank</span>:{payload.message}</p>
                )
              })}
            </ul>

            <div class="chat-form-container">
              <form id="chat-form" onSubmit={sendChat}>
                <input type="text" name="chat" placeholder='send-text'
                  value={message} onChange={(e) => {
                    setmessage(e.target.value);

                  }} />
                <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
);
}

        export default Chatbox;