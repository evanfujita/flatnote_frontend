import React from 'react'

const LoggedOut = props => {
    const { handleClick } = props
    return(
        <ul>
            <li class='navbar-item' id='Register' onClick={handleClick} >register</li>
            <li class='navbar-item' id='Login' onClick={handleClick} >login</li>
            <li class='navbar-item' id='About' onClick={handleClick} >about</li>
        </ul>
    )
}

export default LoggedOut
