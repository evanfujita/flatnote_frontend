import React from 'react'
import { useDispatch } from 'react-redux'
import { logout, addNoteForm } from '../../actions/index'

const LoggedIn = () => {
    
    const dispatch = useDispatch()

    return (
        <ul>
            <li class='navbar-item' id='Notes'  >notes</li>
            <li class='navbar-item' id='addNote' onClick={()=> dispatch(addNoteForm())} >add note</li>
            <li class='navbar-item' onClick={()=> dispatch(logout())}>logout</li>
        </ul>
    )
}

export default LoggedIn