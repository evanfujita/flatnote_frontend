import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import { loginFetch, postFetch, createReqObj } from '../../helpers/fetch'
import { loginAuth, loginFail } from '../../actions/user'

const Login = props => {
    const { type } = props
    const [state, setState] = useState({})
    
    const dispatch = useDispatch()
    
    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const loginFetch = (reqObj) => {
        // debugger
        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(user => {
            // debugger
            if (user.id){dispatch(loginAuth(user))}
            if (user.error){loginFail()}
        })
    }
    
    const postFetch = (resource, reqObj, reducer) => {
        fetch(`http://localhost:3000/${resource}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(reducer){
                reducer(data)
            }
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