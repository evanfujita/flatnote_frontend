import React from 'react'
import DisplayTitle from './DisplayTitle'
import { useSelector } from 'react-redux'

const NotesContainer = () => {
    const { user, notes, tasks } = useSelector(state => state)
    const { viewNotes } = useSelector(state => state.selections)

    const displaySelector = 
        viewNotes 
        ? 
        notes.map(note => <DisplayTitle key={note.id} item={note} type='note' />) 
        : 
        tasks.map(task => <DisplayTitle key={task.id} item={task} type='task' />)
    
    const display = () => {
        if(user && user.id){
            return displaySelector
        }
    }

    return(
        display()
    )
}

export default NotesContainer