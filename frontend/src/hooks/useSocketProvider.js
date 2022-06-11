import socketio from 'socket.io-client';

import {socketUrl} from '../config/socketConfig.js';

const socket = socketio.connect(socketUrl);

export default function useSocketProvider () {
  return {socket};
}
