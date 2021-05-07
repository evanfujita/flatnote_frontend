import { combineReducers } from "redux";
import userReducer from './user'
import notesReducer from './notes'
import selectionsReducer from './selections'

export default combineReducers({
    user: userReducer,
    notes: notesReducer,
    selections: selectionsReducer
})