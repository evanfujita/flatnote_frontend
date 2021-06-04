import {
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILED,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILED
} from '../helpers/constants'

export const addNotes = (dispatch, reqObj) => {
    fetch('http://localhost:3000/notes', reqObj)
    .then(resp => resp.json())
    .then(note => dispatch({ type: ADD_NOTE_SUCCESS, payload: note }))
    .catch(error => dispatch({ type: ADD_NOTE_FAILED, payload: error }))
}

export const deleteNote = (dispatch, id) => {
    fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(confirmation => dispatch({ type: DELETE_NOTE_SUCCESS, payload: id }))
    .catch(error => dispatch({ type: DELETE_NOTE_FAILED, payload: error }))
}

export const addNote = item => {
    return {
        type: 'ADD_NOTE',
        item
    }
}

export const removeNote = item => {
    return {
        type: 'DELETE_NOTE',
        item
    }
}

