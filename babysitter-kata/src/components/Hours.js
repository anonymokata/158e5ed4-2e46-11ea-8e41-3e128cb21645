import React, { useState, useEffect } from 'react'

function Hours(props) {
    // const [start, setStart] = useState('');
    // const [end, setEnd] = useState('');
    // let startTime = '';
    // let endTime = '';
    // let hours = 0;
    // let day = 0;
    // let aBeforeHours = 0;
    // let aAfterHours = 0;
    // let bFirstHours = 0;
    // let bSecondHours = 0;
    // let bThirdHours = 0;
    // let cBeforeHours = 0;
    // let cAfterHours = 0;
    // useEffect(() => {
    //     handleChange()
    // })
    // function checkStartTime(event) {
    //     event.preventDefault()
    //     startTime = document.getElementById('startTime').value
    //     console.log('start time before conditional', startTime)
    //     if (startTime < 17 && startTime >= 4) {
    //         props.setModalMessage('Please enter a valid start time')
    //     } else {
    //         setStart(startTime)
    //         if (end !== '') {
    //             hours = props.calculateHours(parseInt(startTime), parseInt(end))
    //         }
    //     }
    // }
    // function checkEndTime(event) {
    //     event.preventDefault()
    //     day = 0
    //     endTime = document.getElementById('endTime').value
    //     endTime <= 4 ? day = 1 : hours = endTime - startTime
    //     if (start === '') {
    //         return props.setModalMessage('Please enter a start time')
    //     }
    //     if (start >= 17 && endTime <= start && day === 0) {
    //         props.setModalMessage('Please enter a valid end time')
    //     } else {
    //         setEnd(endTime)
    //         console.log('good stuff!  About to calculate hours', 'start =', start, endTime)
    //         hours = props.calculateHours(parseInt(start), parseInt(endTime))
    //     }
    //     console.log(hours)
    //     console.log('day before conditional, after setDay', day)

    // }
    // function handleChange() {
    //     day = 0
    //     // event.preventDefault()
    //     // if (props.family === '') {
    //     //     return props.setModalMessage('Please select a family to babysit for')
    //     // }
    //     // console.log(start, end, day, family, money)
    //     if (startTime >= 17 && day === 1) {
    //         console.log(24 - startTime)
    //         // setStart(startTime)
    //         // setEnd(endTime)
    //     } else if (hours > 0) {
    //         // calculateTotal()
    //     } else {
    //         props.setModalMessage('Please enter a valid start and end time')
    //     }
    //     // console.log(start, end)
    // };

    return (
        <div className='row m-3'>
            <h1 className='col-12'>Hours:</h1>
            <form className='col-12 timeForm'>
                <div className="col-sm-12 col-md-6 form-group">
                    <label htmlFor="formControlRange">Choose a start time</label>
                    <input type="time" id="startTime" min='17:00' defaultValue='17:00' required />
                    <button onClick={props.checkStartTime}>Set Start Time</button>
                    <h3>Start Time: {props.start}</h3>
                </div>
                <div className="col-sm-12 col-md-6 form-group">
                    <label htmlFor="formControlRange">Choose an end time</label>
                    <input type="time" id="endTime" max='04:00' defaultValue='04:00' required />
                    <button onClick={props.checkEndTime}>Set End Time</button>
                    <h3>End Time: {props.end}</h3>
                </div>
            </form>
        </div>
    )
}

export default Hours