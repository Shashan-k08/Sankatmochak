import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { nanoid } from "nanoid";
import { useNavigate } from 'react-router-dom';
import './Chat.css'


const Chat = () => {
  let navigate = useNavigate();
 

  const handlechat = () => {
    navigate("/chatbox");
  }
  return (
    <>
      <div className="chat-wrap">
       
        <div class="join-container">
          <header class="join-header">
            <h1><i class="fas fa-smile"></i> Chat with your Local Volunteer</h1>
          </header>
          <main class="join-main">
            <form onSubmit={handlechat}>
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
              <button type="submit"  class="btn3">Join Chat</button>
            </form>
          </main>
        </div>

      </div>


    </>
  )
}

export default Chat