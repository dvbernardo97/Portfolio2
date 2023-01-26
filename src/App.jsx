import React from 'react';
import './App.css';
import Nav from './components/header/navbar/Nav';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="svg-bg">
      <Nav />

      <main className='main'>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
