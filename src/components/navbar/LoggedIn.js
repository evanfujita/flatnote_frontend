import React from 'react'
import Controls from '../main/Controls'
import { useSelector, useDispatch } from 'react-redux'
import { logout, addNoteForm } from '../../actions/index'

const LoggedIn = () => {
    const selectedNote = useSelector(state => state.selections.note)
    const dispatch = useDispatch()

    return (
        <ul>
            <li class='navbar-item' id='Notes'>notes</li>
            <li class='navbar-item' id='Tasks'>tasks</li>
            <li class='navbar-item' id='addNote' onClick={()=> dispatch(addNoteForm())} >add note</li>
            {selectedNote ? <Controls item={selectedNote} /> : null}
            <span class='positioned'>
                <li class='navbar-item' onClick={()=> dispatch(logout())}>logout</li>
            </span>
        </ul>
    )
}

export default LoggedIn