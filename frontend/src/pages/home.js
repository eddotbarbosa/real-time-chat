import {useState} from 'react';

// import styles from './home.module.scss';
import layout from '../styles/layout.module.scss';

import Chat from '../components/chat/chat';
import Signin from '../components/signin/signin';

export default function Home () {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');
  const [signed, setSigned] = useState(false);

  return (
    <main className={`${layout['container-screen']} ${layout['flex']} ${layout['column']} ${layout['justify-center']} ${layout['align-center']}`}>
      {signed ? (
       <Chat user={user} setUser={setUser} room={room} setRoom={setRoom} setSigned={setSigned}/>
      ) : (
        <Signin user={user} setUser={setUser} room={room} setRoom={setRoom} setSigned={setSigned} />
      )}
    </main>
  );
}
