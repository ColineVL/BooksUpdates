import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from '../Components';
import { HomePage, SearchAnAuthor, MyAuthors } from '.';

function App() {
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

export default App;
