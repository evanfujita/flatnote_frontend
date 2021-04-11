import './App.css';
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'
import UserHome from './components/UserHome'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <Grid>
      <Grid.Row>
        Welcome
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
          <Navbar />
        </Grid.Column>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/profile' component={UserHome}/>
      </Switch>
      </Grid.Row>
    </Grid>
  );
}

export default App;
