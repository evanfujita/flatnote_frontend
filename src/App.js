import './App.css';
import Navbar from './components/main/Navbar'
import NoteForm from './components/forms/NoteForm'
import { useSelector } from 'react-redux'

function App() {

  return (
        <div>
          <div class='App-header'>
            <Navbar />
          </div>
          <div class='main'>
            <div class='first-column'>
              <p>Notes</p>
            </div>
            <div class='second-column'>
              <NoteForm />
              <NoteForm />
              <NoteForm />
            </div>
          </div>
        </div>
  );
}

export default App;
