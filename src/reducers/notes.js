function notes (state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
        case 'LOGOUT_SUCCESS':
            return null
        
        default:
            return state
    }
}

export default notes