import { combineReducers } from "redux";
import userReducer from './user'
import notesReducer from './notes'
import selectedNoteReducer from './selectedNote'

export default combineReducers({
    user: userReducer,
    notes: notesReducer,
    selectedNote: selectedNoteReducer
})