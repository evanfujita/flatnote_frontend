import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/index'

const LoggedIn = props => {
    
    const { handleClick } = props
    const dispatch = useDispatch()

    return (
        <ul>
            <li class='navbar-item' id='Notes' onClick={handleClick} >notes</li>
            <li class='navbar-item' onClick={()=> dispatch(logout())}>logout</li>
        </ul>
    )
}

export default LoggedIn