import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (



    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
        {/* <NoteForm /> */}
      <div className='display'>
      </div>
      <div className='main'>
      </div>
      </header>
    </div>
  );
}

export default App;
