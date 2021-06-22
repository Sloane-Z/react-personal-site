
import React, {useState} from "react";
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

      <Route exact path ='/'>
        <Home/>
      </Route>

      <Route exact path = '/Education'>
        <Navbar/>
        <Education/>
      </Route>

      <Route exact path = '/Experience'>
        <Navbar/>
        <Experience/>
      </Route>

      <Route exact path = '/Project'>
        <Navbar/>
        <Project/>
      </Route>

      <Route exact path = '/Contact'>
        <Navbar/>
        <Contact/>
      </Route>

    </Switch>
     
    </>
    

  );
}


