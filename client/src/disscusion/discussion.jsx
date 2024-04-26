
import './discussion.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navigation from '../home/navigation/nav';

const Discussion = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputImage, setInputImage] = useState('');

  const handleMessageSubmit = () => {
    if (inputText.trim() !== '' || inputImage.trim() !== '') {
      const currentDate = new Date();
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const timestamp = `${hours}:${minutes}`; // Display hours and minutes only
      const newMessage = {
        text: wrapText(inputText),
        timestamp: timestamp,
        sender: 'Me'
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      setInputImage('');
      // Send notification to all users here
    }
  };
  const wrapText = (text, maxLength = 30) => {
    if (text.length <= maxLength) return text;
    return text.replace(new RegExp(`(.{${maxLength}})`, 'g'), '$1\n');
  };

  return (
    <div className="discussion-section">
      <div className='notes-nav'>
          <Navigation/>
        </div>
        <div className='others'>
        <h2>Group Discussion</h2>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.text}</p>
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          placeholder="Type your message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <button className='send' onClick={handleMessageSubmit}>Send</button>
      </div>
          </div>
    </div>
  );
};

export default Discussion;
