import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNote } from '../../actions/notes'
import { deleteFetch, updateFetch, createReqObj } from '../../helpers/fetch'
import { updateNoteForm, updateTaskForm } from '../../actions/index'
import { updateTask } from '../../actions/tasks'

const Controls = props => {
    const dispatch = useDispatch()
    const { item, resource } = props
    
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const editItemButtonDisplay = displayNotes ? 'edit note' : 'edit task'
    const task = useSelector(state => state.selections.task)
    const { viewNotes, viewTasks } = useSelector(state => state.selections)
    // const noteForm = useSelector(state => state.selections.updateNoteForm)
    // const taskForm = useSelector(state => state.selections.updateTaskForm)

    const handleDelete = event => {
        deleteFetch(resource)
        dispatch(removeNote(item))
    }

    const handleEdit = event => {
        // debugger
         viewNotes ? dispatch(updateNoteForm()) : dispatch(updateTaskForm())
    }

    const updateFetch = (resource, reqObj) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(task => {
        dispatch(updateTask(task))
    })
    }

    const taskComplete = event => {
        const resource = `tasks/${task.id}`
        const body = {completed: !task.completed}
        const reqObj = createReqObj('PATCH', body)
        updateFetch(resource, reqObj)
    }

    return (
        <span class='controls'>
            <li class='navbar-item' onClick={handleEdit}>{editItemButtonDisplay}</li>
            {viewTasks && task ? <li class='navbar-item' onClick={taskComplete}>mark complete</li> : null}

            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
            
        </span>
    )
}

export default Controls