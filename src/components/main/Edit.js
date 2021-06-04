import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Edit = props => {
    //redux
    const { updateNoteForm, updateTaskForm, note, task } = useSelector(state => state.selections)
    const type = updateNoteForm ? note.id : task.id

    //state
    const [state, setState] = useState({})

    const handleSubmit = event => {
      console.log('build out submit edit')
    }

    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    return (
        note && updateNoteForm || task && updateTaskForm ?
        <form onSubmit={handleSubmit}>
            <span class='form-span'>
                <label class='form-label'>Title</label>
                <input class='form-span-input' type='text' name='title' placeholder={note.title || task.title} onChange={handleChange}></input>
            </span>
            <span class='form-span'>
                <label class='form-label'>Content</label>
                <input class='form-span-input' type='text' name='body' placeholder={note.body || task.body} onChange={handleChange}></input>
            </span>
            <input class='form-button' type='submit' value='edit button' />
        </form>
        : null
    )
}

export default Edit