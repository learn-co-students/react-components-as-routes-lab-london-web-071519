import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
import movies from '../data';

const App = (props) => {
  console.log(movies);
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/actors"
          component={(routerProps) => <Actors info={movies.actors} />}
        />
        <Route
          exact
          path="/directors"
          component={(routerProps) => <Directors info={movies.directors} />}
        />
        <Route
          exact
          path="/movies"
          component={(routerProps) => <Movies info={movies.movies} />}
        />
      </div>
    </Router>
  );
};

export default App;
