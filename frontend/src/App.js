import './styles/global.scss';

import {SocketProvider} from './contexts/socketContext';

import Home from './pages/home';

function App() {
  return (
    <SocketProvider>
      <Home />
    </SocketProvider>
  );
}

export default App;
