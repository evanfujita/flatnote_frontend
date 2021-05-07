function user(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user
        case 'LOGIN_FAIL':
            return 'FAIL'
        default:
            return state
    }
}

export default user