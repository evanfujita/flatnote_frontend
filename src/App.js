import './App.css';
import { useState } from 'react'
import Login from './components/main/Login'
import Navbar from './components/main/Navbar'

function App() {

  const [login, setLogin] = useState(null);
  const [show, setShow] = useState(null)
  
  const handleLogin = event => {
    const type = event.target.id
    login ? setLogin(null) : setLogin(<Login type={type} />)
  }

  



  return (
        <div>
          <div class='App-header'>
            <Navbar handleClick={handleLogin} />
            {login ? login : null}
          </div>
          {!show ? 'Welcome' : show}
        </div>
  );
}

export default App;
