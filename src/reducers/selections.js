const selections = (state={
    viewNotes: true, 
    viewTasks: false, 
    note: 0, 
    task: 0, 
    addNoteForm: false, 
    updateNoteForm: false,
    addTaskForm: false, 
    updateTaskForm: false},
    action) => {
    
    switch(action.type){

//notes
    case 'SELECT_NOTE':
        return {
            ...state,
            note: action.note,
            task: 0
        }
    
    case 'VIEW_NOTES':
        return {
            ...state,
            task: 0,
            viewNotes: !state.viewNotes,
            viewTasks: false
        }
        
    case 'ADD_NOTE_FORM':
        return {
            ...state,
            addNoteForm: !state.addNoteForm,
            updateNoteForm: false
        }

    case 'EDIT_NOTE_SUCCESS':
        return {
            ...state, 
            note: action.payload,
            updateNoteForm: false
        }

    case 'UPDATE_NOTE_FORM':
        return {
            ...state,
            addNoteForm: false,
            updateNoteForm: !state.updateNoteForm
        }
    
    case 'DELETE_NOTE_SUCCESS':
        return {...state, note: 0}

//tasks
    case 'SELECT_TASK':
        return {
            ...state,
            note: 0,
            task: action.task
        }

    case 'ADD_TASK_FORM':
        return {
            ...state,
            addTaskForm: !state.addTaskForm,
            updateTaskForm: false
        }
    
    case 'EDIT_TASK_SUCCESS':
    case 'COMPLETE_TASK_SUCCESS':
        return {
            ...state,
            task: action.payload
        }

    case 'UPDATE_TASK_FORM':
        return {
            ...state,
            addTaskForm: false,
            updateTaskForm: !state.updateTaskForm
        }

    case 'DELETE_TASK_SUCCESS':
        return {
            ...state,
            task: 0
        }
    
    case 'VIEW_TASKS':
        return {
            ...state,
            note: 0,
            viewNotes: false,
            viewTasks: !state.viewTasks
        }

    case 'UPDATE_TASK':
        return {
            ...state,
            task: action.item
        }
    
    case 'LOGOUT_SUCCESS':
        return {}
           
    default:
        return state
    }
}

export default selections