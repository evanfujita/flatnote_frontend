export const selectNote = note => {
    return {
        type: 'SELECT_NOTE',
        note
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}