import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dsahboard from './components/Dsahboard';
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dsahboard} />
      </App>
    </BrowserRouter> 
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
