import React from 'react'
import DisplayTitle from './DisplayTitle'
import { useSelector } from 'react-redux'

const NotesContainer = () => {
    const { user, notes, tasks } = useSelector(state => state)
    const { viewNotes, viewTasks } = useSelector(state => state.selections)

    const displayNotes = viewNotes ? notes.map(note => <DisplayTitle item={note} type='note' />) : null
    const displayTasks = viewTasks ? tasks.map(task => <DisplayTitle item={task} type='task' />) : null

    return(
        user && user.id ?
        <>
            {displayNotes}
            {displayTasks}
        </>
        : null
    )
}

export default NotesContainer