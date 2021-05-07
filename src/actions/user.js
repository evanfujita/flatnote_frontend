export const loginAuth = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export const loginFail = () => {
    return {
        type: 'LOGIN_FAIL'
    }
}