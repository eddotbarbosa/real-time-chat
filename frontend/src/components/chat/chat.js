import {useState, useEffect, useRef} from 'react';

import styles from './chat.module.scss';
import layout from '../../styles/layout.module.scss';

import useSocket from '../../hooks/useSocket.js';

import signoutIcon from '../../assets/images/log-out-outline.svg';
import sendIcon from '../../assets/images/chevron-forward-circle.svg';

export default function Chat ({user, setUser, room, setRoom, setSigned}) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const divRef = useRef(null);

  const {socket} = useSocket();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  socket.on('chat message', function (message) {
    setMessages([...messages, message]);
  });

  const handleMessage = function (event) {
    event.preventDefault();

    if (!message) return console.log('message field is required!');

    const messageData = {
      id: socket.id,
      user: user,
      room: room,
      message: message,
      createdAt: new Date(Date.now())
    }

    socket.emit('chat message', messageData);

    return setMessage('');
  };

  const handleSignout = function () {
    socket.emit('leave_room', room);

    setUser('');
    setRoom('');
    setSigned(false);
  }

  return (
    <div className={`${styles['chat']}`}>
      <div className={`${styles['chat-header']} ${layout['flex']} ${layout['justify-between']} ${layout['col-12']}`}>
        <span className={`${styles['room']}`}>{room}</span>
        <button className={`${styles['signout-button']}`} onClick={handleSignout}>
          <img src={signoutIcon} alt="sign out icon" />
        </button>
      </div>
      <div className={`${styles['chat-messages']}`}>
        <ul className={`${styles['message-list']} ${layout['flex']} ${layout['align-start']} ${layout['column']}`}>
          {messages.map((message) => {
            return (
              <li className={(socket.id === message.id ? `${styles['me']} ` : '')  + `${styles['message-list-item']} ${layout['mb-2']} ${layout['col-10']}`} key={message.createdAt}>
                <div className={(socket.id === message.id ? `${layout['text-end']} ` : '') + `${layout['mb-1']}`}>
                  <span className={`${styles['message-user']}`}>{message.user}</span>
                </div>
                <div className={(socket.id === message.id ? `${styles['me']} ` : '')  + `${styles['message-container']} ${layout['mb-1']}`}>
                  <p>{message.message}</p>
                </div>
                <div className={(socket.id === message.id ? `${styles['me']} ` : '') + `${styles['date']}`}>
                  <span>
                    {(new Date(message.createdAt).getHours() + ':' + new Date(message.createdAt).getMinutes())}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div ref={divRef} />
      </div>
      <form className={`${styles['chat-message-bar']} ${layout['flex']} ${layout['justify-between']} ${layout['col-12']}`} onSubmit={(event) => {handleMessage(event)}}>
        <input className={`${styles['message-field']} ${layout['col-12']} ${layout['mr-1']}`} type="text" name="message" id="message" placeholder='Message' value={message} onChange={(event) => {setMessage(event.target.value)}} autoComplete="off" required/>
        <button className={`${styles['send-message-icon']}`} type="submit">
          <img src={sendIcon} alt="" />
        </button>
      </form>
    </div>
  );
}
