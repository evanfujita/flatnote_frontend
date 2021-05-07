function user(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.user.id,
                username: action.user.username
            }
        case 'LOGIN_FAIL':
            return 'FAIL'
        case 'LOGOUT_SUCCESS':
            return null
        default:
            return state
    }
}

export default user