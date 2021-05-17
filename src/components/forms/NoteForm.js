import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReqObj, postFetch, updateFetch } from '../../helpers/fetch'
import { addNoteForm, updateNoteForm, update } from '../../actions/index'
import { addNote } from '../../actions/notes'

const NoteForm = () => {
    const user = useSelector(state => state.user)
    const selections = useSelector(state => state.selections)
    const dispatch = useDispatch()
    
    const [state, setState] = useState('')

    const handleChange = event => {
        const item = {...state, [event.target.name]: event.target.value}
        setState(item)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (selections.addNoteForm){
            const reqObj = createReqObj('POST', state)
            postFetch('notes', reqObj, addNote)
            dispatch(addNoteForm())
        } else if (selections.updateNoteForm){
            const reqObj = createReqObj('PATCH', state)
            const id = selections.note.id
            updateFetch(`notes/${id}`, reqObj, update)
            dispatch(updateNoteForm())
        }
        event.target.reset()
    }
    
    return(
        <form class='form' onSubmit={handleSubmit}>
            <input class='form-field' type='text' name='title' placeholder='title' onChange={handleChange} /><br/>
            <textarea class='form-field' rows='3' type='textarea' id='textarea' name='body' placeholder='content' onChange={handleChange} /><br/>
            <input type='submit' />
        </form>
    )
}

export default NoteForm