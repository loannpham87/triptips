import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import "./index.css";
import { USER_LOADING } from './actions/types';
import App from "./App";
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const token = localStorage.getItem('token');


// import * as serviceWorker from "./serviceWorker";

if(token){
    store.dispatch({ type: USER_LOADING });
}

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById("root"));


// serviceWorker.register();
