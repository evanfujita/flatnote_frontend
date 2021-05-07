import { combineReducers } from "redux";
import userReducer from './user'
import notesReducer from './notes'

export default combineReducers({
    user: userReducer,
    notes: notesReducer
})