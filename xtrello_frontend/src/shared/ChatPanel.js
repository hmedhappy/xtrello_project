import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import axios from 'axios'
import { Button } from '@material-ui/core';
// import io from 'socket.io-client';

// import { io } from 'socket.io-client';

require('dotenv').config();

export default function ChatPanel({refresh}) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user] = useState(
    JSON.parse(localStorage.getItem('auth'))
  );

  useEffect(() => {
    fetch(`${process.env.NODE_ENV==="development"? process.env.REACT_APP_BACKEND_DEV : process.env.REACT_APP_BACKEND_PROD}/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, [refresh]);

   

  // const socket = io('http://localhost:3000');

  
  // function HelloTest() {
  //     socket.emit("message",'bonjour je vient envoyer autre');
  //   }

  // const socket = io(`http://localhost:3000/`);
  // socket.on('new-message',(data)=>{
  //   setMessages(old=>[...old,data])
  // })

  const addMessage = () => {
    if (!message.length || !user) {
      alert(user ? 'message vide !':'WHO ARE YOU ?!!');
    } else {
      const newMessage = {content:message,username:user?.username}
      setMessages((old) => [
        ...old,
        newMessage,
      ]);
      setMessage('');
      setTimeout(function () {
        var myDiv = document.querySelector(
          '.chat-messages'
        );
        myDiv.scrollTop = myDiv.scrollHeight;
      }, 800);
      axios.post(`${process.env.NODE_ENV==="development"? process.env.REACT_APP_BACKEND_DEV : process.env.REACT_APP_BACKEND_PROD}/messages`,newMessage)
      // socket.emit('message',newMessage)
    }
  };
  
  return (
    <>
      <div
        className='mt-2 chat-messages'
        style={{ scrollBehavior: 'smooth',height:'67vh'}}>
        {messages?.map((e,index) => (
          <SingleMessage key={index} message={e} />
        ))}
      </div>
      <div className='xchat d-flex'>
       <form onSubmit={(e)=>{e.preventDefault();addMessage()}} style={{width:"100%"}}>
       <input
          className='x-chat-input'
          type='text'
          placeholder='chat here...'
          value={message}
          style={{width:"100%"}}
          onChange={({ target: { value } }) => {
            setMessage(value);
          }}
        />
        <Button type="submit" style={{color:'white !important',display:"none"}} >
        <i
          className='x-chat-send far fa-paper-plane'
          style={{
            fontSize: '25px',
            textAlign: 'center',
            cursor: 'pointer',
            margin: 'auto',
            position: 'absolute',
            right: '15px',
          }}></i>
        </Button>
       </form>  
      </div>
    </>
  );
}
