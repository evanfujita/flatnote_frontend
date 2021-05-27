import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Edit = props => {

    const { updateNoteForm, updateTaskForm } = useSelector(state => state.selections)
    const type = updateNoteForm ? updateNoteForm : updateTaskForm

    return (
        updateNoteForm || updateTaskForm ?
        <div>

        </div>
        : null
    )
}

export default Edit