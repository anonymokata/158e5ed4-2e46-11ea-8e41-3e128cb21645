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
  const [am, setAm] = useState('');
  const [pm, setPm] = useState('');
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
    console.log(typeof event.target, Object.values(event.target))
    for (let item of Object.values(event.target)) {
      console.log(item)
      if (item.value === event.target.value) {
        setAm(item.textContent)
      }
    }
    console.log(typeof parseInt(event.target.value), parseInt(event.target.value))
    startTime = event.target.value
    console.log(typeof parseInt(startTime), parseInt(startTime))
    // startTime = document.getElementById('startTime').value
    if (startTime.includes('time')) {
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
    endTime = event.target.value
    // endTime = document.getElementById('endTime').value
    for (let item of Object.values(event.target)) {
      console.log(item)
      if (item.value === event.target.value) {
        setPm(item.textContent)
      }
    }
    let endInt = parseInt(endTime)
    let totalHours = endInt - parseInt(startTime)
    endInt <= 4 || endInt < start ? day = 1 : setHours(totalHours)
    console.log('day', day)
    console.log('end', endInt)
    if (start === '') {
      return setModalMessage('Please enter a start time')
    }
    if (start >= 17 && endInt <= start && day === 0) {
      setModalMessage('Please enter a valid end time')
    } else if (endInt > 4 && day === 1) {
      setModalMessage('End time must be no later than 4 am')
    } else {
      setEnd(endTime)
      return calculateHours(parseInt(start), parseInt(endTime))
    }
  }
  function calculateHours(start, end) {
    if (family === '') {
      setStart('')
      setEnd('')
      // setHours(0)
      console.log('hours', hours)
      return setModalMessage('Please select a family to babysit for')
    }
    if (start >= 17 && end > 17) {
      console.log('start and end in the pm')
      let totalHours = end - start
      setHours(totalHours)
      return hours
    } else if (start >= 17 && end < 5) {
      console.log('evening start, morning finish')
      let eveningHours = 24 - start
      let totalHours = eveningHours + end
      setHours(totalHours)
      return hours
    } else if (start < 5 && end < 5) {
      console.log('start and end in the am')
      let totalHours = end - start
      setHours(totalHours)
      return hours
    } else {
      return setModalMessage('Start time must be before end time')
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
      <header className="jumbotron py-5">
        <h1 className='mx-auto p-2 bg-white titles'>Babysitter Kata</h1>
      </header>
      <Family handleSelect={handleSelect} />
      <Hours
        family={family}
        setModalMessage={setModalMessage}
        checkStartTime={checkStartTime}
        checkEndTime={checkEndTime}
        start={start}
        end={end}
        am={am}
        pm={pm}
        hours={hours} />
      <Total
        family={family}
        hours={hours}
        start={start}
        end={end}
        day={day}
        setModalMessage={setModalMessage}
        checkStartTime={checkStartTime}
        checkEndTime={checkEndTime} />
    </div>
  );
}

export default App;
