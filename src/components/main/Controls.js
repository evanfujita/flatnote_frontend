import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateNoteForm } from '../../actions/index'
import { removeNote } from '../../actions/notes'
import { deleteFetch } from '../../helpers/fetch'

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
        dispatch(updateNoteForm())
    }

    const taskComplete = event => {
        
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