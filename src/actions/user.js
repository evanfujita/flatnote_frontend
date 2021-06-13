import {
    LOGIN_SUCCESS
} from '../helpers/constants'

export const loginFetch = (dispatch, reqObj) => {
    fetch('http://localhost:3000/login', reqObj)
    .then(resp => resp.json())
    .then(user => dispatch({ type: LOGIN_SUCCESS, payload: user}))
}

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