function tasks (state=null, action){
    let updatedTasks
    switch(action.type){
        case 'LOGIN_SUCCESS':
            
            return action.user.tasks
    
        case 'LOGOUT_SUCCESS':
            return {}
       
        case 'ADD_TASK':
            updatedTasks = [...state, action.item]
            return updatedTasks
       
        case 'UPDATE':
            updatedTasks = state.map(task => {
                if (task.id === action.item.id){
                    return action.item
                } else {
                    return task
                }
            })
            return updatedTasks
            
        case 'DELETE_TASK':
            updatedTasks = state.filter(task=> (task.id != action.item.id))
            return updatedTasks
        
        default:
            return state
    }
}

export default tasks