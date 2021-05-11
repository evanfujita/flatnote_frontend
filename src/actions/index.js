export const selectNote = note => {
    return {
        type: 'SELECT_NOTE',
        note
    }
}

export const selectTask = task => {
    return {
        type: 'SELECT_TASK',
        task
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

export const update = item => {
    return {
        type: 'UPDATE',
        item
    }
}

export const viewNotes = () => {
    return {
        type: 'VIEW_NOTES'
    }
}

export const viewTasks = () => {
    return {
        type: 'VIEW_TASKS'
    }
}