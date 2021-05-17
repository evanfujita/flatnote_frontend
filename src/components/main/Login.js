import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import { loginFetch, postFetch, createReqObj } from '../../helpers/fetch'
import { loginAuth, loginFail } from '../../actions/user'

const Login = props => {
    const [state, setState] = useState('')
    
    const dispatch = useDispatch()
    
    const { type } = props
    const handleChange = event => {
        setState({
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const user = state
        const reqObj = createReqObj('POST', {user: user})
        state.password_confirmation ? postFetch('users', reqObj, loginAuth) : loginFetch(reqObj, loginAuth, loginFail)
        event.target.reset()
    }
    
    return(
        <form onSubmit={handleSubmit}>
            { type === 'login' ? <LoginForm handleChange={handleChange} /> : <RegisterForm handleChange={handleChange} /> }
            <input type='submit' />
        </form>
    )
}

export default Login