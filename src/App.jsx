import React from 'react';
import './App.css';
import Nav from './components/header/navbar/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Nav />

      <main className='main'>
        <Home />
      </main>
    </div>
  );
}

export default App;
