import useSocket from '../../hooks/useSocket';

import styles from './signin.module.scss';
import layout from '../../styles/layout.module.scss';

import person from '../../assets/images/person-outline.svg';
import chatBubble from '../../assets/images/chatbubbles-outline.svg';


export default function Signin ({user, setUser, room, setRoom, setSigned}) {
  const {socket} = useSocket();

  const handleLogin = function (event) {
    event.preventDefault();

    if (user !== '' && room !== '') {
      socket.emit('join_room', room);

      return setSigned(true);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => {handleLogin(event)}}>
        <h1 className={`${layout['text-center']} ${layout['mb-3']}`}>Sign In</h1>
        <div className={`${styles['form-field']} ${layout['flex']} ${layout['mb-2']}`}>
          <label className={`${layout['mr-1']}`} htmlFor="username">
            <div className={`${layout['flex']}`}>
              <img src={person} alt="person icon" />
            </div>
          </label>
          <input className={`${styles['form-input']}`} type="text" name="username" id="username" value={user} onChange={(event) => {setUser(event.target.value)}} placeholder='User' />
        </div>
        <div className={`${styles['form-field']} ${layout['flex']} ${layout['mb-2']}`}>
          <label className={`${layout['mr-1']}`} htmlFor="room">
            <div className={`${layout['flex']}`}>
              <img src={chatBubble} alt="room icon" />
            </div>
          </label>
          <input className={`${styles['form-input']}`} type="text" name="room" id="room" value={room} onChange={(event) => {setRoom(event.target.value)}} placeholder='Room' />
        </div>
        <button className={`${styles['signin-button']}`} type="submit">Sign in</button>
      </form>
    </div>
  );
}
