import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReqObj } from '../../helpers/fetch'
import { addNotes } from '../../actions/notes'

const NoteForm = () => {
    const user = useSelector(state => state.user)
    const { addNoteForm } = useSelector(state => state.selections)
    const dispatch = useDispatch()
    const [state, setState] = useState({user_id: user.id})

    const handleChange = event => {
        const item = {...state, [event.target.name]: event.target.value}
        setState(item)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (addNoteForm){
            const reqObj = createReqObj('POST', state)
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
                <input class='form-span-input' type='text' id='textarea' name='body' placeholder='content' onChange={handleChange} />
            </span>    
                <input class='form-button' type='submit' value='create note' />
        </form>

    )
}

export default NoteForm
