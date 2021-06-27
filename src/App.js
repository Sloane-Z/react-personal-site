
import React, {useState} from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
  
/* Components */
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import SingleProject from './components/SingleProject';

export default function App() {
  
  return (
    <>
    <Switch>

      <Route exact path ='/'>
        <Home/>
      </Route>

      <Route exact path = '/Experience'>
        <Navbar/>
        <Experience/>
      </Route>

      <Route path='/Project'>
        <Navbar/>
        <Project/>
      </Route>

      <Route path='/Contact'>
        <Navbar/>
        <Contact/>
      </Route>

      <Route path='/Project/:id'>
        <Navbar/>
        <SingleProject/>
      </Route>
    </Switch>
     
    </>
    

  );
}


