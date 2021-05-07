function notes (state=null, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
        case 'LOGOUT_SUCCESS':
            return null
        case 'ADD':
            const updatedNotes = [...state, action.item]
            return updatedNotes
        default:
            return state
    }
}

export default notes