import { combineReducers } from "redux";
import userReducer from './user'
import notesReducer from './notes'
import selectionsReducer from './selections'
import tasksReducer from './tasks'

export default combineReducers({
    user: userReducer,
    notes: notesReducer,
    tasks: tasksReducer,
    selections: selectionsReducer
})