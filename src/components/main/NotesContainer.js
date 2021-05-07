import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)

    return(
        <div>
            {notes.length > 0 ? notes.map(note => <Note noteInfo={note}/>) : 'No Notes Yet!'}
        </div>
    )
}

export default NotesContainer