import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css'
import App from './App';
import { createStore, combineReducers } from 'redux'
import { charactersReducer, quizReducer } from './redux/reducer'
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
  characters : charactersReducer,
  quiz : quizReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);