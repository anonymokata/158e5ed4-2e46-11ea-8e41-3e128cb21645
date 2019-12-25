import React, { useState } from 'react';
import './App.css';
import Instructions from './components/Instructions';
import Family from './components/Family';
import Hours from './components/Hours';
import Total from './components/Total';
import Modal from './components/Modal';

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
  // Sets the selected family chosen by the user
  function handleSelect(event) {
    event.preventDefault();
    let fam = event.target.value;
    setFamily(fam);
  };
  // Checks the selected start time and alerts the user if there is an error
  function checkStartTime(event) {
    event.preventDefault();
    isTomorrow = 0;
    setDay(isTomorrow);
    setAm('');
    setStart('');
    if (parseInt(end) <= 4) {
      isTomorrow = 1;
      setDay(isTomorrow);
    };
    startTime = event.target.value;
    if (startTime.includes('time')) {
      return setModalMessage('Please enter a valid start time');
    } else if ((parseInt(end) <= parseInt(startTime) && isTomorrow === 0) || (isTomorrow === 1 && (parseInt(end) <= parseInt(startTime) && parseInt(startTime) < 5))) {
      return setModalMessage('Start time must be before end time');
    } else {
      setStart(startTime);
      for (let item of Object.values(event.target)) {
        if (item.value === event.target.value) {
          setAm(item.textContent);
        };
      };
      if (end !== '') {
        calculateHours(parseInt(startTime), parseInt(end));
      };
    };
  };
  // Checks the selected end time and lets the user know if there is an error in the selection
  function checkEndTime(event) {
    event.preventDefault();
    isTomorrow = 0;
    setDay(isTomorrow);
    setPm('');
    setEnd('');
    let eveningTime = '';
    endTime = event.target.value;
    for (let item of Object.values(event.target)) {
      if (item.value === event.target.value) {
        eveningTime = item.textContent;
        setPm(eveningTime);
      };
    };
    let endInt = parseInt(endTime);
    let totalHours = endInt - parseInt(startTime);
    if (endInt <= 4) {
      isTomorrow = 1;
      setDay(isTomorrow);
    }
    if ((endInt < parseInt(start) && isTomorrow === 0) || (endInt > 17 && parseInt(start) < 4 && isTomorrow === 0) || (isTomorrow === 1 && (endInt <= parseInt(start) && parseInt(start) < 5))) {
      return setModalMessage('End time cannot be before start time');
    } else {
      setHours(totalHours);
    }
    if (start === '') {
      return setModalMessage('Please enter a start time');
    }
    if (start >= 17 && endInt <= start && isTomorrow === 0) {
      setModalMessage('Please enter a valid end time');
    } else if (endInt > 4 && isTomorrow === 1) {
      setModalMessage('End time must be no later than 4 am');
    } else {
      setEnd(endTime);
      return calculateHours(parseInt(start), parseInt(endTime));
    };
  };
  // Calculates the total number of hours worked based on the selected start and end times
  function calculateHours(start, end) {
    if (family === '') {
      setStart('');
      setEnd('');
      return setModalMessage('Please select a family to babysit for');
    }
    if (start >= 17 && end > 17) {
      let totalHours = end - start;
      setHours(totalHours);
      return hours;
    } else if (start >= 17 && end < 5) {
      let eveningHours = 24 - start;
      let totalHours = eveningHours + end;
      setHours(totalHours);
      return hours;
    } else if (start < 5 && end < 5) {
      let totalHours = end - start;
      setHours(totalHours);
      return hours;
    } else {
      return setModalMessage('Start time must be before end time');
    };
  };
  // Sets error messages in the modal component and displays the modal
  function setModalMessage(message) {
    setMessage(message);
    setModal(true);
  };
  // Dismisses the Modal
  function dismissModal() {
    setModal(false);
  };
  return (
    <div className="App">
      {modal ? <Modal message={message} dismissModal={dismissModal} /> : null}
      <header className="jumbotron py-5">
        <h1 className='mx-auto p-2 bg-white titles'>Babysitter Kata</h1>
        <Instructions />
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
