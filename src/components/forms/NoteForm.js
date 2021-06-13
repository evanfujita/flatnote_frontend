import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReqObj } from '../../helpers/fetch'
import { addNotes } from '../../actions/notes'

const NoteForm = props => {
    const user = useSelector(state => state.user)
    const { addNoteForm } = useSelector(state => state.selections)
    const dispatch = useDispatch()
    const [state, setState] = useState({user_id: user.id})

    const handleChange = event => {
        const { name, value } = event.target
        const item = {...state, [name]: value}
        setState(item)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const reqObj = createReqObj('POST', state)
        if (addNoteForm){
            addNotes(dispatch, reqObj)
        }
        event.target.reset()
    }
    
    return(
    
        <form class='container' onSubmit={handleSubmit}>
            <span class='form-span'>
                <label class='form-label'>Title</label>    
                <input class='form-span-input' type='text' name='title' placeholder='title' onChange={handleChange} />
            </span>
            <span class='form-span'>
                <label class='form-label'>Content</label>    
                <input class='form-span-input' type='text-area' rows='2' id='textarea' name='body' placeholder='content' onChange={handleChange} />
            </span>    
                <input class='form-button' type='submit' value='create note' />
        </form>
    )
}

export default NoteForm
