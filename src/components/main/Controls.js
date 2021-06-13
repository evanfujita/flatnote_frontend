import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import { createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { deleteTask, completeTask } from '../../actions/tasks'

const Controls = props => {
    
    //redux
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const { viewNotes, viewTasks, task, note } = useSelector(state => state.selections)
    const dispatch = useDispatch()

    //identifiers and displays
    const { item } = props
    const completeButton = task.completed ? 'mark incomplete' : 'mark complete'
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'

    //methods
    const handleDelete = () => {
        if(item === 'note'){ deleteNote(dispatch, note.id) }
        if(item === 'task'){ deleteTask(dispatch, task.id) }
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
            <li class='navbar-item' onClick={handleEdit}>{editItemButtonDisplay}</li>
            {viewTasks && task ? <li class='navbar-item' onClick={taskComplete}>{completeButton}</li> : null}
            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
        </span>
    )
}

export default Controls