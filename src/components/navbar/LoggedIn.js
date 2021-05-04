import React from 'react'

const LoggedIn = props => {
    
    const { handleClick } = props

    return (
        <ul>
            <li class='navbar-item' id='Notes' onClick={handleClick} >notes</li>
            <li class='navbar-item' >logout</li>
        </ul>
    )
}

export default LoggedIn