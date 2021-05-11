export const addTask = item => {
    return {
        type: 'ADD_TASK',
        item
    }
}

export const removeTask = item => {
    return {
        type: 'DELETE_TASK',
        item
    }
}

export const completeTask = () => {
    return {
        type: 'COMPLETE_TASK'
    }
}