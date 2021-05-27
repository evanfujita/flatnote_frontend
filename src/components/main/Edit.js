import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Edit = props => {

    const { updateNoteForm, updateTaskForm, note, task } = useSelector(state => state.selections)
    const type = updateNoteForm ? note.id : task.id


    return (
        note && updateNoteForm || task && updateTaskForm ?
        <form>
            <span class='form-span'>
                <label>Title</label>
                <input type='text' name='title' placeholder={note.title || task.title}></input>
            </span>
            <span class='form-span'>
                <label>Content</label>
                <input type='text' name='content' placeholder={note.body || task.body}></input>
            </span>
        </form>
        : null
    )
}

export default Edit