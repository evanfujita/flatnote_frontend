import React from 'react'


const LoginForm = props => {

    //destructured props
    const { handleChange } = props

    return(
        <div class='login-form'>
            <input type='text' name='username' placeholder='username' onChange={handleChange} />
            <input type='password' name='password' placeholder='password' onChange={handleChange}/>
        </div>
    )
}

export default LoginForm