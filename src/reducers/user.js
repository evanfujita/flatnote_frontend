function user(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.user.id,
                username: action.user.username
            }
        case 'LOGIN_FAIL':
            return 'FAIL'
        default:
            return state
    }
}

export default user