import React, { useState, useEffect } from 'react';
import './App.css';
import Family from './components/Family'
import Hours from './components/Hours'
import Total from './components/Total'
import Modal from './components/Modal'

function App() {
  // const [start, setStart] = useState('test');
  // const [end, setEnd] = useState('ing');
  // const [day, setDay] = useState(0);
  const [family, setFamily] = useState('');
  const [money, setMoney] = useState(0);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  // let startTime = '';
  // let endTime = '';
  let hours = 0;
  // let day = 0;
  let aBeforeHours = 0;
  let aAfterHours = 0;
  let bFirstHours = 0;
  let bSecondHours = 0;
  let bThirdHours = 0;
  let cBeforeHours = 0;
  let cAfterHours = 0;
  // function handleClick(event) {
  //   event.preventDefault()
  //   if (family === '') {
  //     return alert('Please select a family to babysit for')
  //   }
  //   day = 0
  //   // console.log(start, end, day, family, money)
  //   startTime = parseInt(document.getElementById('startTime').value)
  //   console.log('start time before conditional', startTime)
  //   endTime = parseInt(document.getElementById('endTime').value)
  //   endTime <= 4 ? day = 1 : hours = endTime - startTime
  //   console.log(hours)
  //   console.log('day before conditional, after setDay', day)
  //   if (startTime >= 17 && day === 1) {
  //     console.log(24 - startTime)
  //     // setStart(startTime)
  //     // setEnd(endTime)
  //     hours = calculateHours(startTime, endTime)
  //   } else if (hours > 0) {
  //     calculateTotal()
  //   } else {
  //     alert('Please enter a valid start and end time')
  //   }
  //   // console.log(start, end)
  // };
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    console.log(fam)
    setFamily(fam)
  }
  // function calculateTotal() {
  //   if (family === 'A') {
  //     console.log('the family is A!')
  //   } else if (family === 'B') {
  //     console.log('the family is B!')
  //   } else {
  //     console.log('the family is C!')
  //   }
  // }
  function calculateHours(start, end) {
    if (family === '') {
      alert('Please select a family to babysit for')
    }
    if (start >= 17 && family === 'A') {
        console.log('hello!');
        aBeforeHours = 23 - start
        console.log(hours)
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
      <header className="jumbotron bg-white">
        <h1>Babysitter Kata</h1>
      </header>
      {modal ? <Modal message={message} dismissModal={dismissModal} /> : null}
      <Family handleSelect={handleSelect} />
      <Hours
        family={family}
        calculateHours={calculateHours}
        setModalMessage={setModalMessage} />
      <Total
        family={family}
        money={money}
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
