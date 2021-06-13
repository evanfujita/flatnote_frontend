function tasks (state=null, action){
    let updatedTasks
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.tasks
    
        case 'LOGOUT_SUCCESS':
            return {}
       
        case 'ADD_TASK_SUCCESS':
            updatedTasks = [...state, action.item]
            return updatedTasks
       
        case 'EDIT_TASK_SUCCESS':
            updatedTasks = [...state, action.item]
            return updatedTasks
        
            
        case 'DELETE_TASK':
            updatedTasks = state.filter(task=> (task.id != action.item.id))
            return updatedTasks
        
        default:
            return state
    }
}

export default tasks