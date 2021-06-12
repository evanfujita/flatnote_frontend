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
            updatedNotes = state.filter(note => note.id !== action.payload)
            return updatedNotes

        case 'DELETE_NOTE_FAILED':
            return state
       
        case 'UPDATE':
            updatedNotes = state.map(note => {
                if (note.id === action.item.id){
                    return action.item
                } else {
                    return note
                }
            })
            return updatedNotes
            
        case 'DELETE':
            debugger
            updatedNotes = state.filter(note=> (note.id != action.item.id))
            return updatedNotes
        
        default:
            return state
    }
}

export default notes