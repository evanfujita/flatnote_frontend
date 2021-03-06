import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import thunkMiddleware from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import reducer from './reducers/reducers'
import 'semantic-ui-css/semantic.min.css'



const store = createStore(
  reducer, 
  compose(
    applyMiddleware(thunkMiddleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
  

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
