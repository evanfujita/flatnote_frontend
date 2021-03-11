import React from 'react'
import { connect } from 'react-redux'

class LoginForm extends React.Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const value = this.state
        this.setState({
            username: '',
            password: ''
        })

        this.handleLogin(value)
    }

    handleLogin = value => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user) {
                this.props.history.push('/profile')
                this.props.signedIn(user)
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='username'/>
                <input onChange={this.handleChange} type='text' name='password' value={this.state.password} placeholder='password'/>
                <input type='submit' name='username' value='Login'/>
            </form>
        )}   
    }

    const mapDispatchToProps = dispatch => {
        
        return {
            signedIn: user => dispatch({type: 'LOGIN_SUCCESS', username: user.username, userId: user.id, notes: user.notes})
        }
    }

export default connect(null, mapDispatchToProps)(LoginForm)