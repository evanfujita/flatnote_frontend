import React from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import registerUserFetch from '../../helpers/fetch'

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
            if(!!this.state.password_confirmation){registerUserFetch(this.state)}
            
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