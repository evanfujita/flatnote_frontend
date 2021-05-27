import './App.css';
import Item from './components/main/Item'
import NoteForm from './components/forms/NoteForm'
import TaskForm from './components/forms/TaskForm'
import NotesContainer from './components/main/NotesContainer'
import { useSelector } from 'react-redux'
import DynamicForm from './components/forms/DynamicForm'
import LoggedIn from './components/navbar/LoggedIn'
import LoggedOut from './components/navbar/LoggedOut'

function App() {
  const user = useSelector(state => state.user)
  const selectedNote = useSelector(state => state.selections.note)
  const selectedTask = useSelector(state => state.selections.task)
  const displayNoteForm = useSelector(state => state.selections.addNoteForm)
  const displayTaskForm = useSelector(state => state.selections.addTaskForm)
  const viewNotes = useSelector(state => state.selections.viewNotes)
  const viewTasks = useSelector(state => state.selections.viewTasks)
  const displayUpdateForm = useSelector(state => state.selections.updateNoteForm)
  const notesItems = [
    {header: 'Title', name: 'title', type: 'text'}, 
    {header: 'Content', name: 'content', type: 'textarea'}
  ]
  
  // const tasksItems = ['title', 'content']

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
              {user === 'FAIL' ? 'There was a problem' : null}
              {selectedNote ? <Item item={selectedNote} type='note' /> : null}
              {selectedTask ? <Item item={selectedTask} type='task' /> : null}
              {displayNoteForm && viewNotes ? <NoteForm /> : null}
              {/* {displayTaskForm && viewTasks ? <DynamicForm items={tasksItems} /> : null} */}
            </div>
          </div>
        </div>
  );
}

export default App;