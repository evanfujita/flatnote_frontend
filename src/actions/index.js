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

export const updateNoteForm = () => {
    return {
        type: 'UPDATE_NOTE_FORM'
    }
}
 
export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

export const add = item => {
    return {
        type: 'ADD',
        item
    }
}

export const remove = item => {
    return {
        type: 'DELETE',
        item
    }
}