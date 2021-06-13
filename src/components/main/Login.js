import React from 'react'
import { useDispatch } from 'react-redux'
import { createReqObj } from '../../helpers/fetch'
import { loginAuth, loginFail } from '../../actions/user'
import { loginFetch } from '../../actions/user'

import DynamicForm from '../forms//DynamicForm'


const Login = props => {
    
    const { type } = props
    
    //methods
    const dispatch = useDispatch()
    
    const postFetch = (dispatch, reqObj) => {
        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
                debugger
                dispatch(loginAuth(data))
        })
    }

    const handleSubmit = (event, state) => {
        event.preventDefault()
        const user = state
        const reqObj = createReqObj('POST', {user: user})
        user.password_confirmation ? postFetch(dispatch, reqObj) : loginFetch(dispatch, reqObj)
        event.target.reset()
    }

    //data to pass to dynamic form fields
    const signupItems = [
        {header: 'Username', type: 'text', name: 'username'}, 
        {header: 'Password', type: 'password', name: 'password'},
        {header: 'Password Confirmation', type: 'password', name: 'password_confirmation'}
    ]

    const loginItems = [
        {header: 'Username', type: 'text', name: 'username'}, 
        {header: 'Password', type: 'password', name: 'password'},
    ]

    return(
            <DynamicForm handleSubmit={handleSubmit} items={type==='login' ? loginItems : signupItems} />   
    )
}

export default Login