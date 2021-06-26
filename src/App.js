
import React, {useState} from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
  
/* Components */
import Navbar from './components/Navbar';
import Home from './components/Home';
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

      <Route exact path = '/Experience'>
        <Navbar/>
        <Experience/>
        <Project/>
        <Contact/>
      </Route>

    </Switch>
     
    </>
    

  );
}


