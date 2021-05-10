import './App.css';
import Navbar from './components/main/Navbar'
import Note from './components/main/Note'
import NoteForm from './components/forms/NoteForm'
import NotesContainer from './components/main/NotesContainer'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
  const selectedNote = useSelector(state => state.selections.note)
  const displayForm = useSelector(state => state.selections.addNoteForm)

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
              {selectedNote ? <Note note={selectedNote} /> : null}
              {displayForm ? <NoteForm type='add' /> : null}
            </div>
          </div>
        </div>
  );
}

export default App;
