import React from 'react'
import DisplayTitle from './DisplayTitle'
import { useSelector } from 'react-redux'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const tasks = useSelector(state => state.tasks)
    const viewNotes = useSelector(state => state.selections.viewNotes)
    const viewTasks = useSelector(state => state.selections.viewTasks)

    const displayNotes = viewNotes ? notes.map(note => <DisplayTitle item={note} type='note' />) : null
    const displayTasks = viewTasks ? tasks.map(task => <DisplayTitle item={task} type='task' />) : null

    return(
        <>
            {displayNotes}
            {displayTasks}
        </>
    )
}

export default NotesContainer