import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Footer from './Footer'
import Recipes from "./Recipes"
import Descriptive from "./Descriptive"
import Schedule from './components/pages/Schedule'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddItem from "./components/items/AddItem";
import EditItem from "./components/items/EditItem";
import Item from "./components/items/Item";

function App() {

  return (

    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Descriptive />
            <Schedule />
          </Route>

        </Switch>


        <Switch>
          <Route exact path="/items/add"> <AddItem /> </Route>
        </Switch>

        <Switch>
          <Route exact path="/items/edit/:id"><EditItem /></Route>
        </Switch>

        <Switch>
          <Route exact path="/items/:id"><Item /></Route>
        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
