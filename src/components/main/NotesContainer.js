import React from 'react'
import DisplayItem from './DisplayItem'
import { useSelector } from 'react-redux'


const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const tasks = useSelector(state => state.tasks)
    const viewNotes = useSelector(state => state.selections.viewNotes)
    const viewTasks = useSelector(state => state.selections.viewTasks)

    const displayNotes = 
        viewNotes 
        ?
        notes.map(note => <DisplayItem item={note} type='note' />)
        :
        null

    const displayTasks =
        viewTasks
        ?
        tasks.map(task => <DisplayItem item={task} type='task' />)
        :
        null

    return(
        <div>
            {displayNotes}
            {displayTasks}
        </div>
    )
}

export default NotesContainer