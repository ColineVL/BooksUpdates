import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from '../Components';
import { HomePage, SearchAnAuthor, MyAuthors } from '.';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/searchAnAuthor" component={SearchAnAuthor} />
          <Route path="/myAuthors" component={MyAuthors} />
        </Switch>
      </Router>
    );
  }
}
