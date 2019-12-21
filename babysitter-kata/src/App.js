import React, { useState } from 'react';
import './App.css';
import Family from './components/Family'
import Hours from './components/Hours'
import Total from './components/Total'
import Modal from './components/Modal'

function App() {
  const [family, setFamily] = useState('');
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  let startTime = '';
  let endTime = '';
  let day = 0;
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    setFamily(fam)
  }
  function checkStartTime(event) {
    event.preventDefault()
    startTime = document.getElementById('startTime').value
    if (startTime < 17 && startTime >= 4) {
      setModalMessage('Please enter a valid start time')
    } else {
      setStart(startTime)
      if (end !== '') {
        calculateHours(parseInt(startTime), parseInt(end))
      }
    }
  }
  function checkEndTime(event) {
    event.preventDefault()
    day = 0
    endTime = document.getElementById('endTime').value
    let totalHours = parseInt(endTime) - parseInt(startTime)
    endTime <= 4 ? day = 1 : setHours(totalHours)
    if (start === '') {
      return setModalMessage('Please enter a start time')
    }
    if (start >= 17 && endTime <= start && day === 0) {
      setModalMessage('Please enter a valid end time')
    } else {
      setEnd(endTime)
      calculateHours(parseInt(start), parseInt(endTime))
    }
  }
  function calculateHours(start, end) {
    if (family === '') {
      setModalMessage('Please select a family to babysit for')
    }
    if (start >= 17 && end > 17) {
      let totalHours = end - start
      setHours(totalHours)
      return hours
    } else {
      let eveningHours = 24 - start
      let totalHours = eveningHours + end
      setHours(totalHours)
      return hours
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
        setModalMessage={setModalMessage}
        checkStartTime={checkStartTime}
        checkEndTime={checkEndTime}
        start={start}
        end={end}
        hours={hours} />
      <Total
        family={family}
        hours={hours}
        start={start}
        end={end}
        setModalMessage={setModalMessage} />
    </div>
  );
}

export default App;
