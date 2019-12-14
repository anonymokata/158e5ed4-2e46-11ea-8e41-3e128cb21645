import React from 'react';
import './App.css';
import Family from './components/Family'

function App() {
  return (
    <div className="App">
      <header className="jumbotron bg-white">
        <h1>Babysitter Kata</h1>
      </header>
      <Family />
    </div>
  );
}

export default App;
