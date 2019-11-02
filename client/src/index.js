import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"

import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dsahboard from './components/Dsahboard';

ReactDOM.render(<BrowserRouter>
  <App>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/dashboard" component={Dsahboard} />
  </App>
</BrowserRouter> , document.getElementById('root'));

serviceWorker.unregister();
