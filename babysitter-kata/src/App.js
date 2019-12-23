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
  const [day, setDay] = useState(0);
  const [end, setEnd] = useState('');
  const [am, setAm] = useState('');
  const [pm, setPm] = useState('');
  let startTime = '';
  let endTime = '';
  let eveningTime = '';
  let isTomorrow = 0;
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    setFamily(fam)
  }
  function checkStartTime(event) {
    event.preventDefault()
    isTomorrow = 0
    setDay(isTomorrow)
    setAm('')
    setStart('')
    if (parseInt(end) <= 4) {
      isTomorrow = 1
      setDay(isTomorrow)
    }
    console.log(typeof event.target, Object.values(event.target))
    console.log(typeof parseInt(event.target.value), parseInt(event.target.value))
    startTime = event.target.value
    console.log(typeof parseInt(startTime), parseInt(startTime))
    // startTime = document.getElementById('startTime').value
    console.log('day', day)
    console.log('am:', am, 'pm: ', pm)
    console.log('end', end, endTime, parseInt(end), 'start', parseInt(startTime))
    if (startTime.includes('time')) {
      return setModalMessage('Please enter a valid start time')
      // } else if (parseInt(end) < parseInt(startTime) && (day === 0 || day === 1)) {
        // (props.day === 1 && (parseInt(props.end) <= parseInt(props.start) && parseInt(props.start) < 5))
    } else if ((parseInt(end) <= parseInt(startTime) && isTomorrow === 0) || (isTomorrow === 1 && (parseInt(end) <= parseInt(startTime) && parseInt(startTime) < 5))) {
      return setModalMessage('Start time must be before end time')
    } else {
      setStart(startTime)
      for (let item of Object.values(event.target)) {
        console.log(item)
        if (item.value === event.target.value) {
          setAm(item.textContent)
        }
      }

      if (end !== '') {
        calculateHours(parseInt(startTime), parseInt(end))
      }
    }
  }
  function checkEndTime(event) {
    event.preventDefault()
    isTomorrow = 0
    setDay(isTomorrow)
    setPm('')
    setEnd('')
    let eveningTime = ''
    endTime = event.target.value
    // endTime = document.getElementById('endTime').value
    for (let item of Object.values(event.target)) {
      console.log(item)
      if (item.value === event.target.value) {
        eveningTime = item.textContent
        setPm(eveningTime)
      }
    }
    let endInt = parseInt(endTime)
    let totalHours = endInt - parseInt(startTime)
    if (endInt <= 4) {
      console.log('setting day to 1')
      isTomorrow = 1
      setDay(isTomorrow)
      console.log('after setDay:', day)
    } else if (endInt < parseInt(start) && isTomorrow === 0) {
      return setModalMessage('End time cannot be before start time')
    } else if (endInt > 17 && parseInt(start) < 4 && isTomorrow === 0) {
      return setModalMessage('End time cannot be before start time')
    } else if (endInt < parseInt(start) && isTomorrow === 1) {
      return setModalMessage('End time cannot be before start time')
    } else {
      setHours(totalHours)
    }
    // endInt <= 4 || endInt < start ? day = 1 : setHours(totalHours)
    console.log('day', day)
    console.log('start', start)
    console.log('end', endInt)
    console.log('am: ', am, 'pm:', parseInt(eveningTime))
    if (start === '') {
      return setModalMessage('Please enter a start time')
    }
    if (start >= 17 && endInt <= start && isTomorrow === 0) {
      // if (endInt <= start && day === 0) {
      setModalMessage('Please enter a valid end time')
    } else if (endInt > 4 && isTomorrow === 1) {
      setModalMessage('End time must be no later than 4 am')
    } else {
      console.log('setting end time now')
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
    console.log(parseInt(end), parseInt(startTime), day)
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
