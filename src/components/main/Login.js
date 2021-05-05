import React from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import { registerUserFetch, createReqObj } from '../../helpers/fetch'

class Login extends React.Component {
    state = {}
    
    render(){
        const { type } = this.props
        const handleChange = event => {
            this.setState({
                [event.target.name]:event.target.value
            })
        }

        const handleSubmit = event => {
            event.preventDefault()
            const user = this.state
            const reqObj = createReqObj('POST', user)
            if(!!this.state.password_confirmation){registerUserFetch(reqObj)}
            
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