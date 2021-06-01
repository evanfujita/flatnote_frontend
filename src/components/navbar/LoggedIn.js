import React from 'react'
import Controls from '../main/Controls'
import { useSelector, useDispatch } from 'react-redux'
import { logout, addNoteForm, addTaskForm, viewNotes, viewTasks } from '../../actions/index'

const LoggedIn = () => {
    const dispatch = useDispatch()
    const { note, task } = useSelector(state => state.selections)
    const selectedTask = useSelector(state => state.selections.task)
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const displayTasks = useSelector(state => state.selections.viewTasks)
    const notesClass = displayNotes ? 'selected-navbar-item' : 'navbar-item'
    const tasksClass = displayTasks ? 'selected-navbar-item' : 'navbar-item'

    return (
        <ul>
            <li class={notesClass} id='Notes' onClick={()=> dispatch(viewNotes())}>notes</li>
            <li class={tasksClass} id='Tasks' onClick={()=> dispatch(viewTasks())}>tasks</li>
            {displayNotes ? <li class='navbar-item' id='addNote' onClick={()=> dispatch(addNoteForm())} >add note</li> : null}
            {displayTasks ? <li class='navbar-item' id='addTask' onClick={()=> dispatch(addTaskForm())} >add task</li> : null}
            
            {note ? <Controls resource={`notes/${note.id}`} item={note} /> : null}
            {task ? <Controls resource={`notes/${task.id}`} item={task} /> : null}
            <span class='positioned'>
                <li class='navbar-item' onClick={()=> dispatch(logout())}>logout</li>
            </span>
        </ul>
    )
}

export default LoggedIn