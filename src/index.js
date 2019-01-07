import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'font-awesome/css/font-awesome.min.css';
//import 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';

import reducers from './reducers'
import thunk from "redux-thunk";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));


