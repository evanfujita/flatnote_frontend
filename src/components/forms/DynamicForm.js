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
            <>
                <label>{item.header}</label>
                <input 
                    key={header} 
                    class='form-field' 
                    type={type} 
                    name={name} 
                    placeholder={header} 
                    onChange={handleChange}
                /><br/><br/>
            </>
        )
        }))

    return(
        <form class='dynamic-form' onSubmit={(e)=> handleSubmit(e, state)}>
            {formFields}
            <input type='submit' value='Submit' />
        </form>
    )
}

export default DynamicForm