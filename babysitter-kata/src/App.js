import React, { useState, useEffect } from 'react';
import './App.css';
import Family from './components/Family'
import Hours from './components/Hours'
import Total from './components/Total'

function App() {
  const [start, setStart] = useState('test');
  const [end, setEnd] = useState('ing');
  const [day, setDay] = useState(0);
  const [family, setFamily] = useState('');
  const [money, setMoney] = useState(0)
  function handleClick(event) {
    event.preventDefault()
    if (document.getElementById('startTime').value >= '17:00' && document.getElementById('endTime').value <= '04:00') {
      setStart(document.getElementById('startTime').value)
      setEnd(document.getElementById('endTime').value)
    } else {
      alert('Please enter a valid start and end time')
    }
    console.log(start, end)
  };
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    console.log(fam)
    setFamily(fam)
  }
  return (
    <div className="App">
      <header className="jumbotron bg-white">
        <h1>Babysitter Kata</h1>
      </header>
      <Family handleSelect={handleSelect} />
      <Hours handleClick={handleClick} />
      <Total 
      family={family}
      money={money}/>
    </div>
  );
}

export default App;
