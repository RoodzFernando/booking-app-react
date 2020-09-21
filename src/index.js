import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import './styles/Register.scss';
import './styles/Login.scss';
import './styles/Navigation.scss';
import './styles/SocialLinks.scss';
import './styles/Home.scss';
import './styles/Model.scss';
import './styles/DetailPage.scss';
import './styles/BookTest.scss';
import store from './helpers/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
