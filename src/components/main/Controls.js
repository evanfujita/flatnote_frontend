import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import { createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { editNote } from '../../actions/notes'
import { updateTask, completeTask } from '../../actions/tasks'


const Controls = props => {
    const dispatch = useDispatch()
    const { item } = props
    
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const id = useSelector(state => state.user.id)
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'
    const task = useSelector(state => state.selections.task)
    const { viewNotes, viewTasks } = useSelector(state => state.selections)

    const handleDelete = () => {
        deleteNote(dispatch, item.id)     
    }

    const handleEdit = () => {
         viewNotes ? dispatch(updateNoteForm()) : dispatch(updateTaskForm())
    }

    const taskComplete = () => {
        const body = {completed: !task.completed}
        const reqObj = createReqObj('PATCH', body)
        completeTask(dispatch, reqObj, id)
        // updateFetch(resource, reqObj)
        // editNote(dispatch, reqObj, id)
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