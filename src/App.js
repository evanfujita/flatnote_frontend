import './App.css';
import Item from './components/main/Item'
import NoteForm from './components/forms/NoteForm'
import TaskForm from './components/forms/TaskForm'
import NotesContainer from './components/main/NotesContainer'
import { useSelector } from 'react-redux'
import DynamicForm from './components/forms/DynamicForm'
import LoggedIn from './components/navbar/LoggedIn'
import LoggedOut from './components/navbar/LoggedOut'
import Edit from './components/main/Edit'

function App() {
  const user = useSelector(state => state.user)
  const { note, task, addNoteForm, addTaskForm, viewNotes, viewTasks, updateNoteForm, updateTaskForm } = useSelector(state => state.selections)

  return (
        <div>
          <div class='App-header'>
            {user && user.id ? <LoggedIn /> : <LoggedOut />}
          </div>
          <div class='main'>
            <div class='first-column'>
              {user && user.id ? <NotesContainer /> : null}
            </div>
            <div class='second-column'>
              { user === 'FAIL' ? 'There was a problem' : null }
              { note ? <Item item={ note } type='note' /> : null }
              { task ? <Item item={ task } type='task' /> : null }
              { addNoteForm && viewNotes ? <NoteForm /> : null }
              { addTaskForm && viewTasks ? <NoteForm /> : null }
              { updateNoteForm && viewNotes ? <Edit type='note' /> : null }
              { updateTaskForm && viewTasks ? <Edit type='task' /> : null }
            </div>
          </div>
        </div>
  );
}

export default App;