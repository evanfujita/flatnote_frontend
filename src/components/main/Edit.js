import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReqObj } from '../../helpers/fetch'
import { editNote } from '../../actions/notes'

const Edit = props => {
    //redux
    const { note, task } = useSelector(state => state.selections)
    const dispatch = useDispatch()
    // const { type } = props

    //state
    const [state, setState] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        const body = state
        const id = note.id || task.id
        const reqObj = createReqObj('PATCH', body)
        editNote(dispatch, reqObj, id)        
    }

    const handleChange = event => {
        const { name, value } = event.target
        setState({...state, [name]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <span class='form-span'>
                <label class='form-label'>Title</label>
                <input class='form-span-input' type='text' name='title' placeholder={note.title || task.title} onChange={handleChange}></input>
            </span>
            <span class='form-span'>
                <label class='form-label'>Content</label>
                <input class='form-span-input' type='text' name='body' placeholder={note.body || task.body} onChange={handleChange}></input>
            </span>
            <input class='form-button' type='submit' value='update item' />
        </form>
    )
}

export default Edit