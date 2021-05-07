export const selectNote = note => {
    return {
        type: 'SELECT_NOTE',
        note
    }
}

export const addNoteForm = () => {
    return {
        type: 'ADD_NOTE_FORM'
    }
}
 
export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}