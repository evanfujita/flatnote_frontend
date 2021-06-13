import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectNote, selectTask } from '../../actions/index'

const DisplayTitle = props => {
    const selectedNote = useSelector(state => state.selections.note)
    const selectedTask = useSelector(state => state.selections.task)
    const dispatch = useDispatch()
    const { item, type } = props
    
    const handleClick = item => {
        const { type } = props
        if(type === 'note'){ dispatch(selectNote(item)) } 
        if(type === 'task'){ dispatch(selectTask(item)) }        
    }

    return(
        <p 
            class={(type === 'note' && selectedNote.id === item.id) || (type === 'task' && selectedTask.id === item.id) ? 'selected' : 'title'}
            onClick={()=> handleClick(item)}
            id={item.id} 
            >
            {item.completed ? <span class='completed-task'> {item.title} </span> : item.title}
        </p>    
        
    )
}

export default DisplayTitle