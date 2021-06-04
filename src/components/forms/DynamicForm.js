import React, { useState } from 'react'

const DynamicForm = props => {
    //local state
    const [state, setState] = useState('')
    
    const handleChange = event => {
        const change = {...state, [event.target.name]: event.target.value}
        setState(change)
    }
    
    const { items, handleSubmit } = props

    const formFields = items.map((item =>
        {
        const { header, type, name } = item 
        return(
            <span class='form-span'>
                <label class='form-label'>{item.header}</label>
                <input 
                    key={header} 
                    class='form-span-input' 
                    type={type} 
                    name={name} 
                    placeholder={header} 
                    onChange={handleChange}
                />
            </span>
        )
        }))

    return(
        <form class='dynamic-form' onSubmit={(e)=> handleSubmit(e, state)}>
            {formFields}
            <input class='form-button' type='submit' value='Submit' />
        </form>
    )
}

export default DynamicForm