import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';

// import {Router, Route,browserHistory} from 'react-router';


import Login from '../src/Component/Login';
import Profile from './Component/Profile';

const AppWithRouter = () => (
  <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
serviceWorker.unregister();
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App} />
//     <Route path="/login" component={Login} />
//     <Route path="/profile" component={Profile} />
//   </Router>
//   , document.getElementById('root')
// )

