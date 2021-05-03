import './App.css';
import { useState } from 'react'
import Login from './components/main/Login'
import Navbar from './components/main/Navbar'

function App() {

  const [show, setShow] = useState(null);
  
  const handleClick = event => {
    setShow(event.target.id)
  }

  return (
        <div>
          <div class='App-header'>
            <Navbar handleClick={handleClick} />
            {!show ? 'Welcome' : show}
          </div>
          <Login />
        </div>
  );
}

export default App;
