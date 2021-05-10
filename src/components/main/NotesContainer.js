import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNote } from '../../actions/index'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const [selectTitle, setSelector] = useState(0)
    
    const handleClick = note => {
        dispatch(selectNote(note))
        setSelector(note.id)
    }

    return(
        <div>
            {notes.length > 0 ? notes.map(note => <p key={note.id} id={note.id} class={selectTitle == note.id ? 'selected' : 'title'} onClick={()=> handleClick(note)}>{note.title}</p>) : 'No Notes Yet!'}
        </div>
    )
}

export default NotesContainer