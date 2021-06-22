
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
  const [animEnd, setAnimEnd] = useState(false);
  function HomePage(){
    if (!animEnd){
      return <Home/>;
    }
    else{

    }
  }
  
  return (
    <HomePage animEnd={animEnd} setAnimEnd={setAnimEnd}/>

  );
}


