function notes (state=null, action){
    let updatedNotes
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.notes
    
        case 'LOGOUT_SUCCESS':
            return {}
       
        case 'ADD_NOTE':
            updatedNotes = [...state, action.item]
            return updatedNotes

        case 'ADD_NOTE_SUCCESS':
            return [...state, action.payload]

        case 'EDIT_NOTE_SUCCESS':
            updatedNotes = state.map(note => {
                if(note.id === action.payload.id){
                    return action.payload
                } else {
                    return note
                }
            })
            return updatedNotes

        case 'DELETE_NOTE_SUCCESS':
            debugger
            updatedNotes = state.filter(note => note.id !== action.payload)
            return updatedNotes

        case 'DELETE_NOTE_FAILED':
            return state
        
        default:
            return state
    }
}

export default notes