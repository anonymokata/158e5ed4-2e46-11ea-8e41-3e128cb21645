import React, { useState } from 'react';
import './App.css';
import Family from './components/Family'
import Hours from './components/Hours'

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [day, setDay] = useState(0);
  function handleClick(event) {
    event.preventDefault()
    console.log('start', document.getElementById('startTime').value > '17:00')
    // if (document.getElementById('startTime').value >)
    setStart(document.getElementById('startTime').value)
    console.log('end', document.getElementById('endTime').value)
  };
  return (
    <div className="App">
      <header className="jumbotron bg-white">
        <h1>Babysitter Kata</h1>
      </header>
      <Family />
      <Hours handleClick={handleClick} />
    </div>
  );
}

export default App;
