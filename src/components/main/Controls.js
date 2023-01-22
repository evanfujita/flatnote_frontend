import React from 'react'
import { deleteNote } from '../../actions/notes'
import { createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { deleteTask, completeTask } from '../../actions/tasks'

const Controls = props => {
    
    //destructured props: item
    const { type } = props

    //identifiers and displays to indicate selection
    const showForm = displayNoteForm || displayTaskForm ? 'show-form' : 'edit'
    const completeButton = task.completed ? 'mark incomplete' : 'mark complete'
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'

    //methods
    const handleDelete = () => {
        if(type === 'note'){ deleteNote(dispatch, note.id) }
        if(type === 'task'){ deleteTask(dispatch, task.id) }
    }

    const handleEdit = () => {
         viewNotes ? dispatch(updateNoteForm()) : dispatch(updateTaskForm())
    }

    const taskComplete = () => {
        const body = {completed: !task.completed}
        const reqObj = createReqObj('PATCH', body)
        completeTask(dispatch, reqObj, task.id)
    }

    return (
        <span class='controls'>
            <li class='navbar-item' id={showForm} onClick={handleEdit}>{editItemButtonDisplay}</li>
            {viewTasks && task ? <li class='navbar-item' onClick={taskComplete}>{completeButton}</li> : null}
            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
        </span>
    )
}

export default Controls