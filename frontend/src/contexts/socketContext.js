import {createContext} from 'react';

import useSocketProvider from '../hooks/useSocketProvider.js';

export const socketContext = createContext();

export function SocketProvider ({children}) {
  const {socket} = useSocketProvider();

  return (
    <socketContext.Provider value={{socket}}>
      {children}
    </socketContext.Provider>
  );
}
