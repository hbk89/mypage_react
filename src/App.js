import React from 'react';
import Home from './components/home';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
