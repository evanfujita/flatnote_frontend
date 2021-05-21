import React from 'react'

const RegisterForm = props => {
    const { handleChange } = props
    return(
        <div class='login-form'>
            <input class='input' type='text' name='username' placeholder='username' onChange={handleChange} />
            <input class='input' type='password' name='password' placeholder='password' onChange={handleChange}/>
            <input class='input' type='password' name='password_confirmation' placeholder='password confirmation' onChange={handleChange}/><br/>
        </div>
    )
}

export default RegisterForm