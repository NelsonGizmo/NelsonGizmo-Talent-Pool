import React from 'react'
import Chatbox from '../Components/Chatbox'
import Users from '../Components/Users';
import scrollbar from "../scrollbar.svg";

const Messages = () => {
  return (
    <div>
        <Chatbox />
        <img src={scrollbar} alt='scrollbar'/>
        <Users/>
    </div>
  )
}

export default Messages