import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from '../Components';
import { HomePage, SearchAnAuthor, MyFavoriteAuthors } from '.';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/searchAnAuthor" component={SearchAnAuthor} />
                <Route path="/myFavoriteAuthors" component={MyFavoriteAuthors} />
            </Switch>
        </Router>
    );
}

export default App;
