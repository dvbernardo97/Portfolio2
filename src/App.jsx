import React from 'react';
import DevIcon from "devicon-react-svg"
import './App.css';
import Nav from './components/header/navbar/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="svg-bg">
      <Nav />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
