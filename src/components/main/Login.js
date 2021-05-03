import React from 'react'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

class Login extends React.Component{
    state={}

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('submit', event)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <LoginForm handleChange={this.handleChange} />
                <RegisterForm handleChange={this.handleChange} />
                <input type='submit' />
            </form>
        )
    }

}

export default Login