const selections = (state={note: null, addNoteForm: false, updateNoteForm: false}, action) => {
    let newState
    switch(action.type){
    case 'SELECT_NOTE':
        return {
            ...state,
            note: action.note}
    
    case 'ADD_NOTE_FORM':
        return {
            ...state,
            addNoteForm: !state.addNoteForm,
            updateNoteForm: false
        }
        case 'UPDATE_NOTE_FORM':
        return {
            ...state,
            addNoteForm: false,
            updateNoteForm: !state.updateNoteForm
        }
    case 'LOGOUT_SUCCESS':
        return {}
    case 'DELETE':
        return{
            ...state,
            note: null
        }
    default:
        return state
    }
}

export default selections