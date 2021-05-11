export const addNote = item => {
    return {
        type: 'ADD_NOTE',
        item
    }
}

export const removeNote = item => {
    return {
        type: 'DELETE_NOTE',
        item
    }
}