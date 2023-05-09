import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // replace with your server URL

function Earthmore() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChatLog([...chatLog, msg]);
    });
  }, [chatLog]);

  return (
    <div className='rrr'>
      <ul>
        {chatLog.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Earthmore;
