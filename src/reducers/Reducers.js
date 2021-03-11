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
            return  {notes: [...state.notes, action.note]}
        case 'LOGIN_SUCCESS':
            return {
                signedIn: true,
                username: action.username,
                userId: action.userId,
                notes: action.notes
            }
        default:
            return state
    }
}