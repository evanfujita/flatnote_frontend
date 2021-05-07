import React from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import { loginFetch, createReqObj } from '../../helpers/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { loginAuth } from '../../actions/user'

class Login extends React.Component {
    state = {}
    
    render(){
        const { type } = this.props
        const dispatch = useDispatch()
        const handleChange = event => {
            this.setState({
                [event.target.name]:event.target.value
            })
        }

        const handleSubmit = event => {
            event.preventDefault()
            const user = this.state
            const reqObj = createReqObj('POST', {user: user})
            this.state.password_confirmation ? loginFetch(reqObj, dispatch(loginAuth())) : loginFetch(reqObj, dispatch(loginAuth()))
        }
        
        return(
            <form onSubmit={handleSubmit}>
                { type === 'login' ? <LoginForm handleChange={handleChange} /> : <RegisterForm handleChange={handleChange} /> }
                <input type='submit' />
            </form>
        )
        }
}

export default Login