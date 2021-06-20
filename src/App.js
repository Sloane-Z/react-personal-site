
import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
  
/* Components */
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'><Home></Home> </Route>
      <Route exact path='/Education' component={Education}></Route>
      <Route exact path='/Experience' component={Experience}></Route>
      <Route exact path='/Project' component={Project}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
      <Redirect to="/" />
    </Switch>
    </>
  );
}


