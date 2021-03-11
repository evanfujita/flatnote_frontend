export default function Reducers(
    state = {
        notes: []
    }, 
    action
){
    switch(action.type){
        case 'ADD_NOTE':
            // console.log(state.notes)
            // console.log(action.note)
            return  {notes: [...state.notes, action.note]}
        default:
            return state
    }
}