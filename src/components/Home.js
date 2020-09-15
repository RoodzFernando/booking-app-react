import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import InfoPage from './InfoPage';

function Home() {
  return (
    <div>
      {/* <h1>Welcome Home</h1> */}
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/info" strict component={InfoPage} />
      </Switch>
    </div>
  );
}

export default Home;
