import './App.css';
import Navbar from './components/main/Navbar'
import Item from './components/main/Item'
import NoteForm from './components/forms/NoteForm'
import NotesContainer from './components/main/NotesContainer'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
  const selectedNote = useSelector(state => state.selections.note)
  const selectedTask = useSelector(state => state.selections.task)
  const displayForm = useSelector(state => state.selections.addNoteForm)
  const displayUpdateForm = useSelector(state => state.selections.updateNoteForm)

  return (
        <div>
          <div class='App-header'>
            <Navbar />
          </div>
          <div class='main'>
            <div class='first-column'>
              {user && user.id ? <NotesContainer /> : null}
            </div>
            <div class='second-column'>
              {user === 'FAIL' ? 'There was a problem' : null}
              {selectedNote ? <Item item={selectedNote} /> : null}
              {selectedTask ? <Item item={selectedTask} /> : null}
              {displayForm || displayUpdateForm ? <NoteForm /> : null}
            </div>
          </div>
        </div>
  );
}

export default App;
