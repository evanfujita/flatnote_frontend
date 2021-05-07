function user(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            debugger
            return action.user
        default:
            return state
    }
}

export default user