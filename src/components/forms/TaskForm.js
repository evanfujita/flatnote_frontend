import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const TaskForm = props => {
    const [state, setState] = useState({user_id: props.user.id})

    const user = useSelector(state => state.user)

    const handleChange = event => {
        setState({
            ...state, [event.target.name]: event.target.value
        })
    }
    
    return(
        <form class='form' onSubmit={this.handleSubmit}>
            <input class='form-field' type='text' name='title' placeholder='title' onChange={handleChange} /><br/>
            <input class='form-field' type='text' name='body' placeholder='content' onChange={handleChange} /><br/><br/>
            <input type='submit' value='create task' />
        </form>
    )
}

export default TaskForm