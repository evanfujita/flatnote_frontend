import React from 'react'

import { selectNote, selectTask } from '../../actions/index'

const DisplayTitle = props => {

    //destructured props
    const { item, type } = props
    
    //methods
    const handleClick = item => {
        const { type } = props
        if(type === 'note'){ dispatch(selectNote(item)) } 
        if(type === 'task'){ dispatch(selectTask(item)) }        
    }

    return(
        <p 
            // class={(type === 'note' && selectedNote.id === item.id) || (type === 'task' && selectedTask.id === item.id) ? 'selected' : 'title'}
            onClick={()=> handleClick(item)}
            id={item.id} 
            >
            {item.completed ? <span class='completed-task'> {item.title} </span> : item.title}
        </p>    
        
    )
}

export default DisplayTitle