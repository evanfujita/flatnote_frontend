import React, { useState } from 'react'
import { createReqObj } from '../../helpers/fetch'
import { addNotes } from '../../actions/notes'

const NoteForm = props => {
    
    //local state
    // const [state, setState] = useState({user_id: user.id})
    
    //methods
    const handleChange = event => {
        
    }

    const handleSubmit = event => {
        event.preventDefault()
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
