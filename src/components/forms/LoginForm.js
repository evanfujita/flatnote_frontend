import React from 'react'

const LoginForm = props => {
    const { handleChange } = props
    return(
        <>
            <input type='text' name='username' placeholder='username' onChange={handleChange} />
            <input type='password' name='password' placeholder='password' onChange={handleChange}/>
        </>
    )
}

export default LoginForm