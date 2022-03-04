import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import ListBeer from './views/ListBeer';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer}/>
        <Route path="/beers/:id" component={SingleBeer} />
        <Route path="/beers" component={ListBeer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
