function user(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.payload.id,
                username: action.payload.username
            }
        case 'LOGIN_FAIL':
            return 'FAIL'
        case 'LOGOUT_SUCCESS':
            return {}
        default:
            return state
    }
}

export default user