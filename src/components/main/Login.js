import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import { loginFetch, postFetch, createReqObj } from '../../helpers/fetch'
import { loginAuth, loginFail } from '../../actions/user'

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
            const { loginAuth, loginFail } = this.props
            const user = this.state
            const reqObj = createReqObj('POST', {user: user})
            this.state.password_confirmation ? postFetch('users', reqObj, loginAuth) : loginFetch(reqObj, loginAuth, loginFail)
            event.target.reset()
        }
        
        return(
            <form onSubmit={handleSubmit}>
                { type === 'login' ? <LoginForm handleChange={handleChange} /> : <RegisterForm handleChange={handleChange} /> }
                <input type='submit' />
            </form>
        )
        }
}

const mapDispatchToProps = {
    loginAuth,
    loginFail
}

export default connect(null, mapDispatchToProps)(Login)