
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
  function HomePage(props){
    if (!animEnd){
      return <Home/>;
    }
    else{
      
    }
  }
  const [animEnd, setAnimEnd] = useState(false);
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/Education'>
        <Navbar></Navbar>
        <Education/>
      </Route>
      <Route exact path='/Experience'>
        <Navbar></Navbar>
        <Experience/>
      </Route>
      <Route exact path='/Project'>
        <Navbar></Navbar>
        <Project/>
      </Route>
      <Route exact path='/Contact'>
        <Navbar></Navbar>
        <Contact/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </>
  );
}


