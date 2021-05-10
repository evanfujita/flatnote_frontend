import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNote } from '../../actions/index'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const viewNotes = useSelector(state => state.selections.viewNotes)
    const dispatch = useDispatch()
    const [selectTitle, setSelector] = useState(0)
    
    const handleClick = note => {
        dispatch(selectNote(note))
        setSelector(note.id)
    }

    const displayNotes = 
        viewNotes 
        ?
        notes.map(note => <p key={note.id} id={note.id} class={selectTitle == note.id ? 'selected' : 'title'} onClick={()=> handleClick(note)}>{note.title}</p>)
        :
        null

    return(
        <div>
            {displayNotes}
        </div>
    )
}

export default NotesContainer