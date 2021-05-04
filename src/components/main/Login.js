import React from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

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
            console.log('submit', event)
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