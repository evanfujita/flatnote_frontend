import React from 'react'
import Controls from '../main/Controls'
import { useSelector, useDispatch } from 'react-redux'
import { logout, addNoteForm, addTaskForm, viewNotes, viewTasks } from '../../actions/index'

const LoggedIn = () => {
    
    //redux
    const { note, task } = useSelector(state => state.selections)
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const displayTasks = useSelector(state => state.selections.viewTasks)
    const displayNoteForm = useSelector(state => state.selections.addNoteForm)
    const displayTaskForm = useSelector(state => state.selections.addTaskForm)
    const dispatch = useDispatch()
    
    //dynamic class and id names to indicate selection
    let taskSelector = displayTaskForm ? 'show-task-form' : 'add-task' 
    let noteSelector = displayNoteForm ? 'show-task-form' : 'add-task' 
    const notesClass = displayNotes ? 'selected-navbar-item' : 'navbar-item'
    const tasksClass = displayTasks ? 'selected-navbar-item' : 'navbar-item'

    return (
        <ul>
            <li class={notesClass} id='Notes' onClick={()=> dispatch(viewNotes())}>notes</li>
            <li class={tasksClass} id='Tasks' onClick={()=> dispatch(viewTasks())}>tasks</li>
            {displayNotes ? <li class='navbar-item' id={noteSelector} onClick={()=> dispatch(addNoteForm())} >add note</li> : null}
            {displayTasks ? <li class='navbar-item' id={taskSelector} onClick={()=> dispatch(addTaskForm())} >add task</li> : null}
            
            {note ? <Controls type='note' /> : null}
            {task ? <Controls type='task' /> : null}
            <span class='positioned'>
                <li class='navbar-item' onClick={()=> dispatch(logout())}>logout</li>
            </span>
        </ul>
    )
}

export default LoggedIn