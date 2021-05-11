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

    const handleDelete = event => {
        debugger
        deleteFetch(resource)
        dispatch(removeNote(item))
    }
    
    const handleConfirmDelete = event => {

    }

    const handleEdit = event => {
        dispatch(updateNoteForm())
    }

    return (
        <span class='controls'>
            <li class='navbar-item' onClick={handleEdit}>{editItem}</li>
            <span class='red' onClick={handleDelete}>
                <li class='navbar-item' >delete</li>
            </span>
            
        </span>
    )
}

export default Controls