import {useContext} from 'react';

import {socketContext} from '../contexts/socketContext.js';

export default function useSocket () {
  const context = useContext(socketContext);

  if (!context) throw new Error('useAuth must be inside an authProvider!');

  const {socket} = context;

  return {socket};
}
