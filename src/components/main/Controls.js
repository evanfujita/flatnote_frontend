import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editNote, deleteNote } from '../../actions/notes'
import { createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { updateTask, deleteTask, completeTask } from '../../actions/tasks'

const Controls = props => {
    const dispatch = useDispatch()
    const { item } = props
    
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'
    const { viewNotes, viewTasks, task, note } = useSelector(state => state.selections)

    const handleDelete = () => {
        if(item === 'note'){
            deleteNote(dispatch, note.id)         
        } else {
            deleteTask(dispatch, task.id)     
        }
            
    }

    const handleEdit = () => {
         viewNotes ? dispatch(updateNoteForm()) : dispatch(updateTaskForm())
    }

    const taskComplete = () => {
        const body = {completed: !task.completed}
        const reqObj = createReqObj('PATCH', body)
        completeTask(dispatch, reqObj, task.id)
    }

    const completeButton = task.completed ? 'mark incomplete' : 'mark complete'
    
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