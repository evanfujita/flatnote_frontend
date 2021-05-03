import './App.css';
import Login from './components/main/Login'
import Navbar from './components/main/Navbar'

function App() {

  return (
        <div>
          <div class='App-header'>
            <Navbar />
            <p>Welcome</p>
          </div>
          <Login />
        </div>
  );
}

export default App;
