import {
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILED,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED,
    COMPLETE_TASK_SUCCESS,
    COMPLETE_TASK_FAILED,
} from '../helpers/constants'

export const addTask = (dispatch, reqObj) => {
    fetch('http://localhost:3000/tasks', reqObj)
    .then(resp => resp.json())
    .then(task => dispatch({ type: ADD_TASK_SUCCESS, payload: task }))
    .catch(error => dispatch({ type: ADD_TASK_FAILED, payload: error }))
}

export const editTask = (dispatch, reqObj, id) => {
    fetch(`http://localhost:3000/tasks/${id}`, reqObj)
    .then(resp => resp.json())
    .then(task => dispatch({ type: EDIT_TASK_SUCCESS, payload: task }))
    .catch(error => dispatch({ type: EDIT_TASK_FAILED, payload: error }))
}

export const completeTask = (dispatch, reqObj, id) => {
    fetch(`http://localhost:3000/tasks/${id}`, reqObj)
    .then(resp => resp.json())
    .then(task => {
        dispatch({type: COMPLETE_TASK_SUCCESS, payload: task})
    })
}

export const deleteTask = (dispatch, id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(confirmation => dispatch({ type: DELETE_TASK_SUCCESS, payload: id }))
    .catch(error => dispatch({ type: DELETE_TASK_FAILED, payload: error }))
}

export const updateTask = item => {
    return {
        type: 'UPDATE_TASK',
        item
    }
}