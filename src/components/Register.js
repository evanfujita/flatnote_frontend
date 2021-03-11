import React from 'react'
import { connect } from 'react-redux'

class Register extends React.Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
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
            username: ''
        })
    }

render(){
    return(
        <form onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='username'/>
            <input onChange={this.handleChange} type='text' name='password' value={this.state.password} placeholder='password'/>
            <input onChange={this.handleChange} type='text' name='password_confirmation' value={this.state.password_confirmation} placeholder='confirm password'/>
            <input type='submit' name='submit' value='Register'/>
        </form>
     )
    }   
}

const mapDispatchToProps = dispatch => {
    return
}

export default connect(null, mapDispatchToProps)(Register)