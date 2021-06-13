import React, { useState } from 'react'
import Login from '../main/Login'

const LoggedOut = () => {
    
    //local state
    const [login, setLogin] = useState(null);
    
    //methods
    const handleLogin = event => {
      const type = event.target.id
      login ? setLogin(null) : setLogin(<Login type={type} />)
    }
    
    return(
        <ul>
            <li class='navbar-item' id='register' onClick={handleLogin} >register</li>
            <li class='navbar-item' id='login' onClick={handleLogin} >login</li>
            <div>{login}</div>
        </ul>
    )
}

export default LoggedOut
