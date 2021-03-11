import React from 'react'
import { connect } from 'react-redux'

class LoginForm extends React.Component{

    constructor(){
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
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
            <input type='submit' name='username' value='Login'/>
        </form>
     )
    }   
}

const mapDispatchToProps = dispatch => {

}

export default connect(null, mapDispatchToProps)(LoginForm)