import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import InfoPage from './InfoPage';
import Models from './Models';
import TestDrive from './TestDrive';
import DetailPage from './DetailPage';
import BookTest from './BookTest';

function Home() {
  return (
    <div className="body-app">
      {/* <h1>Welcome Home</h1> */}
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact strict component={Login} />
        {/* <Route path="/info" strict component={Models} /> */}
        <Route path="/model" strict component={Models} />
        <Route path="/test-drive" strict component={TestDrive} />
        <Route path="/detail/:id" strict component={DetailPage} />
        <Route path="/book/:id" strict component={BookTest} />
      </Switch>
    </div>
  );
}

export default Home;
