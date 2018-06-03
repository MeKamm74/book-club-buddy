import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home.js'
import Submit from '../Submit/Submit.js'
import Submissions from '../Submissions/Submissions.js'
import Rate from '../Rate/Rate.js'
// import './Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/submit' component={Submit}/>
      <Route path='/submissions' component={Submissions}/>
      <Route path='/rate' component={Rate}/>
    </Switch>
  </main>
);

export default Main;