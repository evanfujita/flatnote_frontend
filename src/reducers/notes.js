function notes(state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
        
        default:
            return state
    }
}

export default notes