function notes (state=null, action){
    let updatedNotes
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
        case 'LOGOUT_SUCCESS':
            return null
        case 'ADD':
            updatedNotes = [...state, action.item]
            return updatedNotes
        case 'DELETE':
            updatedNotes = state.filter(note=> (note.id != action.item.id))
            return updatedNotes
        default:
            return state
    }
}

export default notes