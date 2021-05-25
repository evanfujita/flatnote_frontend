import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateNoteForm } from '../../actions/index'
import { removeNote } from '../../actions/notes'
import { deleteFetch, updateFetch, createReqObj } from '../../helpers/fetch'
import { updateTask } from '../../actions/tasks'

const Controls = props => {
    const dispatch = useDispatch()
    const { item, resource } = props
    
    const displayNotes = useSelector(state => state.selections.viewNotes)
    const editItem = displayNotes ? 'edit note' : 'edit task'
    const task = useSelector(state => state.selections.task)
    const viewTasks = useSelector(state => state.selections.viewTasks)

    const handleDelete = event => {
        deleteFetch(resource)
        dispatch(removeNote(item))
    }

    const handleEdit = event => {
        debugger
        dispatch(updateNoteForm())
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
            <li class='navbar-item' onClick={handleEdit}>{editItem}</li>
            {viewTasks && task ? <li class='navbar-item' onClick={taskComplete}>mark complete</li> : null}

            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
            
        </span>
    )
}

export default Controls