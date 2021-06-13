function tasks (state=null, action){
    let updatedTasks
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.tasks
    
        case 'LOGOUT_SUCCESS':
            return {}
       
        case 'ADD_TASK_SUCCESS':
            updatedTasks = [...state, action.payload]
            return updatedTasks
       
        case 'EDIT_TASK_SUCCESS':
        case 'COMPLETE_TASK_SUCCESS':
            // debugger
            updatedTasks = state.map(task => {
                if(task.id === action.payload.id){
                    return action.payload
                } else {
                    return task
                }
            })
            return updatedTasks
            
        case 'DELETE_TASK_SUCCESS':
            updatedTasks = state.filter(task=> (task.id != action.payload))
            return updatedTasks
        
        default:
            return state
    }
}

export default tasks