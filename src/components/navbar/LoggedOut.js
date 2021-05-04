import React, { useState } from 'react'
import LoginForm from '../forms/LoginForm'
import Login from '../main/Login'

const LoggedOut = props => {
    const [login, setLogin] = useState(null);
    
    const handleLogin = event => {
      const type = event.target.id
      login ? setLogin(null) : setLogin(<Login type={type} />)
    }
    
    return(
        <ul>
            <li class='navbar-item' id='register' onClick={handleLogin} >register</li>
            <li class='navbar-item' id='login' onClick={handleLogin} >login</li>
            {login}
        </ul>
    )
}

export default LoggedOut
