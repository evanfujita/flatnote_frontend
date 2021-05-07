const selectNote = (state=null, action) => {
    switch(action.type){
    case 'SELECT_NOTE':
        return action.note
    default:
        return state
    }
}

export default selectNote