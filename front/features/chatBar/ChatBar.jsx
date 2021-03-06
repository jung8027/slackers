import React from 'react';
import {socket} from '../../socket';

const ChatBar = props => {
  const {input, inputAction} = props;
  const handleChange = (event) => {
    inputAction(event.target.value)
  };

  const sendMessage = () => {
    const channel = "test"
    socket.emit('message', {room: channel, msg:input})
  };

  return (
    <div className="chat_bar">
      <input 
        type='text'
        onChange={handleChange}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )

}

export default ChatBar;

