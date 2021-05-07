import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNote } from '../../actions/index'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()

    return(
        <div>
            {notes.length > 0 ? notes.map(note => <p key={note.id} onClick={()=> dispatch(selectNote(note))}>{note.title}</p>) : 'No Notes Yet!'}
        </div>
    )
}

export default NotesContainer