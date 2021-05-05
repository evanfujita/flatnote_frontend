import React from 'react'

const RegisterForm = props => {
    const { handleChange } = props
    return(
        <>
            <input type='text' name='username' placeholder='username' onChange={handleChange} />
            <input type='password' name='password' placeholder='password' onChange={handleChange}/>
            <input type='password' name='password_confirmation' placeholder='password confirmation' onChange={handleChange}/>
        </>
    )
}

export default RegisterForm