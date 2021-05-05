import './App.css';
import Navbar from './components/main/Navbar'
import NoteForm from './components/forms/NoteForm'

function App() {

  return (
        <div>
          <div class='App-header'>
            <Navbar />
          </div>
          <div class='main'>
            <NoteForm />
          </div>
        </div>
  );
}

export default App;
