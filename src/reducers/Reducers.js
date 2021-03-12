export default function Reducers(
    state = {
        signedIn: false,
        username: '',
        userId: 0,
        notes: []
    }, 
    action
){
    switch(action.type){
        case 'ADD_NOTE':
            return  {...state, notes: [...state.notes, action.note]}
        case 'LOGIN_SUCCESS':
            return {
                signedIn: true,
                username: action.username,
                userId: action.userId,
                notes: action.notes
            }
        case 'CHANGE_USERNAME':
            return {
                username: action.username
            }
        case 'EDIT_NOTE':
            const editedNotes = state.notes.map(note => {
                if(note.id === action.note.id){
                    return action.note
                } else {
                    return note
                }
            })
            return {
                ...state, 
                notes: editedNotes
            }
        case 'DELETE_NOTE':
            const updatedNotes = state.notes.filter(note => note.id !== action.id)
            return {
                ...state, notes: updatedNotes
            }
        default:
            return state
    }
}