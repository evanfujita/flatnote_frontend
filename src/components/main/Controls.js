import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import { createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { updateTask } from '../../actions/tasks'


const Controls = props => {
    const dispatch = useDispatch()
    const { item } = props
    
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'
    const task = useSelector(state => state.selections.task)
    const { viewNotes, viewTasks } = useSelector(state => state.selections)

    const handleDelete = () => {
        deleteNote(dispatch, item.id)     
    }

    const handleEdit = () => {
         viewNotes ? dispatch(updateNoteForm()) : dispatch(updateTaskForm())
    }

    const updateFetch = (resource, reqObj) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(task => {
        dispatch(updateTask(task))
    })
    }

    const taskComplete = () => {
        const resource = `tasks/${task.id}`
        const body = {completed: !task.completed}
        const reqObj = createReqObj('PATCH', body)
        updateFetch(resource, reqObj)
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