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
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  let aBeforeHours = 0;
  let aAfterHours = 0;
  let bFirstHours = 0;
  let bSecondHours = 0;
  let bThirdHours = 0;
  let cBeforeHours = 0;
  let cAfterHours = 0;
  let startTime = '';
  let endTime = '';
  // let hours = 0;
  let day = 0;
  useEffect(() => {
    document.title = `The total hours is ${hours}`
  })
  function handleSelect(event) {
    event.preventDefault()
    let fam = event.target.value
    console.log(fam)
    setFamily(fam)
  }
  function checkStartTime(event) {
    event.preventDefault()
    startTime = document.getElementById('startTime').value
    console.log('start time before conditional', startTime)
    if (startTime < 17 && startTime >= 4) {
      setModalMessage('Please enter a valid start time')
    } else {
      setStart(startTime)
      if (end !== '') {
        setHours(calculateHours(parseInt(startTime), parseInt(end)))
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
      console.log('good stuff!  About to calculate hours', 'start =', start, endTime)
      calculateHours(parseInt(start), parseInt(endTime))
    }
    console.log(hours)
    console.log('day before conditional, after setDay', day)
  }
  function calculateHours(start, end) {
    if (family === '') {
      setModalMessage('Please select a family to babysit for')
    }
    if (start >= 17 && end > 17) {
      console.log('start', start, 'end', end)
      console.log (end - start)
      let totalHours = end - start
      setHours(totalHours)
      return hours
    } else {
      console.log('end', end)
      console.log(7 + end)
      let totalHours = 7 + end
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
        // calculateHours={calculateHours}
        setModalMessage={setModalMessage}
        checkStartTime={checkStartTime}
        checkEndTime={checkEndTime}
        start={start}
        end={end} />
      <Total
        family={family}
        money={money}
        hours={hours}
        start={start}
        end={end}
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
