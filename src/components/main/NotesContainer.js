import React, { useState } from 'react'
import DisplayItem from './DisplayItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectNote } from '../../actions/index'

const NotesContainer = () => {
    const notes = useSelector(state => state.notes)
    const tasks = useSelector(state => state.tasks)
    const viewNotes = useSelector(state => state.selections.viewNotes)
    const viewTasks = useSelector(state => state.selections.viewTasks)
    const dispatch = useDispatch()
    // const [selectTitle, setSelector] = useState(0)
    
    const handleClick = note => {
        dispatch(selectNote(note))
        // setSelector(note.id)
    }

    const displayNotes = 
        viewNotes 
        ?
        notes.map(note => <DisplayItem handleClick={handleClick} item={note} type='note' />)
        // <p key={note.id} id={note.id} class={selectTitle == note.id ? 'selected' : 'title'} onClick={()=> handleClick(note)}>{note.title}</p>)
        :
        null

    const displayTasks =
        viewTasks
        ?
        tasks.map(task => <DisplayItem handleClick={handleClick} item={task} type='task' />)
        // <p key={task.id} id={task.id} class={selectTitle == task.id ? 'selected' : 'title'} onClick={()=> handleClick(task)}>{task.title}</p>)
        :
        null

    return(
        <div>
            {displayNotes}
            {displayTasks}
        </div>
    )
}

export default NotesContainer