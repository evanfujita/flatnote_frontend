import React from 'react'
import DisplayTitle from './DisplayTitle'
import { useSelector } from 'react-redux'

const NotesContainer = () => {

    //redux
    const { user, notes, tasks } = useSelector(state => state)
    const { viewNotes } = useSelector(state => state.selections)

    //display notes or tasks
    const displaySelector = 
        viewNotes 
        ? 
        notes.map(note => <DisplayTitle key={note.id} item={note} type='note' />) 
        : 
        tasks.map(task => <DisplayTitle key={task.id} item={task} type='task' />)
    
    //conditional to display if user is logged in    
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