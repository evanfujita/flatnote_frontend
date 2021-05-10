import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNote } from '../../actions/index'


const DisplayItem = props => {
    const selectedNote = useSelector(state => state.selections.note)
    const selectedTask = useSelector(state => state.selections.task)
    const dispatch = useDispatch()
    const { item, type } = props
    


    const handleClick = item => {
        
        const { type } = props
        // debugger
        if(type === 'note'){
            dispatch(selectNote(item))
        } else {
            // dispatch(selectTask(item))
        }

        
    }

    return(
        <p 
            class={selectedNote.id === item.id || selectedTask.id === item.id ? 'selected' : 'title'}
            onClick={()=> handleClick(item)}
            id={item.id} 
            >{item.title}
        </p>    
    )
}

export default DisplayItem