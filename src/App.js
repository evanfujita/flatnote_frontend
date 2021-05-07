import './App.css';
import Navbar from './components/main/Navbar'
import NoteForm from './components/forms/NoteForm'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
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
              {user && user.id ? <NoteForm /> : null}
              {user === 'FAIL' ? 'There was a problem' : null}
            </div>
          </div>
        </div>
  );
}

export default App;
