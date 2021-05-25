const selections = (state={
    viewNotes: true, 
    viewTasks: false, 
    note: 0, 
    task: 0, 
    addNoteForm: false, 
    updateNoteForm: false}, 
    action) => {
    
    let newState
    switch(action.type){
    case 'SELECT_NOTE':
        return {
            ...state,
            note: action.note,
            task: 0
        }
    
    case 'SELECT_TASK':
        return {
            ...state,
            note: 0,
            task: action.task
        }
    
    case 'ADD_NOTE_FORM':
        return {
            ...state,
            addNoteForm: !state.addNoteForm,
            updateNoteForm: false
        }

    case 'ADD_TASK_FORM':
        return {
            ...state,
            addTaskForm: !state.addTaskForm,
            // updateNoteForm: false
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
        debugger
        return{
            ...state,
            note: null
        }
    
    case 'VIEW_NOTES':
        return {
            ...state,
            viewNotes: !state.viewNotes,
            viewTasks: false
        }
    
    case 'VIEW_TASKS':
        return {
            ...state,
            viewNotes: false,
            viewTasks: !state.viewTasks
        }

    // case 'COMPLETE_TASK':
    //     return {
    //         ...state,
    //         task: {
    //             ...state.task,
    //             completed: !state.task.completed
    //         }
    //     }

    case 'UPDATE_TASK':
        return {
            ...state,
            task: action.item
        }
   
    default:
        return state
    }
}

export default selections