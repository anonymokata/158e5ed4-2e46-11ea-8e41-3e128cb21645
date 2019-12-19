import React, { useState, useEffect } from 'react';
import './App.css';
import Family from './components/Family'
import Hours from './components/Hours'
import Total from './components/Total'
import Modal from './components/Modal'

function App() {
  const [family, setFamily] = useState('');
  const [money, setMoney] = useState(0);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [hours, setHours] = useState(0);
  let aBeforeHours = 0;
  let aAfterHours = 0;
  let bFirstHours = 0;
  let bSecondHours = 0;
  let bThirdHours = 0;
  let cBeforeHours = 0;
  let cAfterHours = 0;
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    console.log(fam)
    setFamily(fam)
  }
  function calculateHours(start, end) {
    if (family === '') {
      alert('Please select a family to babysit for')
    }
    if (family === 'A') {
      console.log(start, end)
      if (start >= 17 && end < 24) {
        console.log('setting hours')
        setHours(end - start)
        return hours
      }
        console.log('hello!');
        aBeforeHours = 23 - start
        console.log('hours', hours)
    } else if (start >= 17 && family === 'B') {

    } else if (start >= 17 && family === 'C') {

    }

}
function setModalMessage(message) {
  setMessage(message)
  setModal(true)
}
function dismissModal() {
    setModal(false)
}
  return (
    <div className="App">
      {modal ? <Modal message={message} dismissModal={dismissModal} /> : null}
      <header className="jumbotron bg-white">
        <h1>Babysitter Kata</h1>
      </header>
      <Family handleSelect={handleSelect} />
      <Hours
        family={family}
        calculateHours={calculateHours}
        setModalMessage={setModalMessage} />
      <Total
        family={family}
        money={money}
        hours={hours}
        aBeforeHours={aBeforeHours}
        aAfterHours={aAfterHours}
        bFirstHours={bFirstHours}
        bSecondHours={bSecondHours}
        bThirdHours={bThirdHours}
        cBeforeHours={cBeforeHours}
        cAfterHours={cAfterHours}
        setModalMessage={setModalMessage} />
    </div>
  );
}

export default App;
