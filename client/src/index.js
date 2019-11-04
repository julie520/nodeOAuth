import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dsahboard from './components/Dsahboard';
import AuthGuard from "./components/HOCs/authGuard";
import reducers from "./reducers";

const jwtToken = localStorage.getItem('JWT_TOKEN');

const store = createStore(reducers, {
  auth: {
    token: jwtToken,
    isAuthenticated: jwtToken ? true : false
  }
}, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <AuthGuard exact path="/dashboard" component={Dsahboard} />
      </App>
    </BrowserRouter> 
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
