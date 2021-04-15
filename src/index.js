import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./store/reducer";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Appe = (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(
    Appe,
  document.getElementById('root')
);
