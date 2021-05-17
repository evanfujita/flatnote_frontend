import React, { useState } from 'react'

const DynamicForm = props => {    
    const [state, setState] = useState('')

    const handleChange = event => {
        const change = {...state, [event.target.name]: event.target.value}
        setState(change)
    }
    const formFields = props.items.map(item => (<input key={item} class='form-field' type='text' name={item} placeholder={item} onChange={handleChange}/>))
    return(
        <form>
            {formFields}
            <input type='submit' value='Submit' />
        </form>
    )
}

export default DynamicForm