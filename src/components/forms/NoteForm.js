import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReqObj } from '../../helpers/fetch'
import { addNote } from '../../actions/notes'

const NoteForm = () => {
    const user = useSelector(state => state.user)
    const { addNoteForm } = useSelector(state => state.selections)
    const dispatch = useDispatch()
    const [state, setState] = useState({user_id: user.id})

    const handleChange = event => {
        const item = {...state, [event.target.name]: event.target.value}
        setState(item)
    }

    const postFetch = (reqObj) => {
        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(note => {
            dispatch(addNote(note))
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (addNoteForm){
            const reqObj = createReqObj('POST', state)
            postFetch(reqObj)
        // } else if (updateNoteForm){
        //     const reqObj = createReqObj('PATCH', state)
        //     const id = selections.note.id
        //     updateFetch(`notes/${id}`, reqObj, update)
        //     dispatch(updateNoteForm())
        }
        event.target.reset()
    }
    
    return(
    
        <form class='container' onSubmit={handleSubmit}>
            <input class='form-field' type='text' name='title' placeholder='title' onChange={handleChange} /><br/>
            <input class='form-field' type='text' id='textarea' name='body' placeholder='content' onChange={handleChange} /><br/><br/>
            <input type='submit' />
        </form>

    )
}

export default NoteForm