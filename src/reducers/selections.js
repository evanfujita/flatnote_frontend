const selections = (state={note: null, addNoteForm: false}, action) => {
    switch(action.type){
    case 'SELECT_NOTE':
        return {
            ...state,
            note: action.note}
    
    case 'ADD_NOTE_FORM':
        return {
            ...state,
            addNoteForm: !state.addNoteForm
        }
    case 'LOGOUT_SUCCESS':
        return null
    default:
        return state
    }
}

export default selections