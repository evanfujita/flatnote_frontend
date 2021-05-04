import React, { useState } from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

const Login = props => {

    const [form, setForm] = useState(null)

    const handleChange = event => {
        setForm(event.target.name)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('submit', event)
    }

        return(
            <form onSubmit={handleSubmit}>
                <LoginForm handleChange={handleChange} />
                {/* <RegisterForm handleChange={handleChange} /> */}
                <input type='submit' />
            </form>
        )

}

export default Login