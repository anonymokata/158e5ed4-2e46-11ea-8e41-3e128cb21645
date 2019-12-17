import React, { useState, useEffect } from 'react'

function Hours(props) {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    let startTime = '';
    let endTime = '';
    let hours = 0;
    let day = 0;
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
    function checkStartTime(event) {
        event.preventDefault()
        startTime = parseInt(document.getElementById('startTime').value)
        console.log('start time before conditional', startTime)
        if (startTime < 17 && startTime >= 4) {
            alert('Please enter a valid start time')
        } else {
            setStart(startTime)
        }
    }
    function checkEndTime(event) {
        event.preventDefault()
        day = 0
        endTime = parseInt(document.getElementById('endTime').value)
        endTime <= 4 ? day = 1 : hours = endTime - startTime
        if (start === '') {
            return alert('Please enter a start time')
        }
        if (start >= 17 && endTime <= start && day === 0) {
            alert('Please enter a valid end time')
        } else {
            setEnd(endTime)
            hours = props.calculateHours(startTime, endTime)
        }
        console.log(hours)
        console.log('day before conditional, after setDay', day)

    }
    function handleChange() {
        day = 0
        // event.preventDefault()
        // if (props.family === '') {
        //     return alert('Please select a family to babysit for')
        // }
        // console.log(start, end, day, family, money)
        if (startTime >= 17 && day === 1) {
            console.log(24 - startTime)
            // setStart(startTime)
            // setEnd(endTime)
        } else if (hours > 0) {
            // calculateTotal()
        } else {
            alert('Please enter a valid start and end time')
        }
        // console.log(start, end)
    };

    return (
        <div className='row m-3'>
            <h1 className='col-12'>Hours:</h1>
            <form className='col-12 timeForm'>
                <div className="col-sm-12 col-md-6 form-group">
                    <label htmlFor="formControlRange">Choose a start time</label>
                    <input type="time" id="startTime" min='17:00' defaultValue='17:00' required />
                    <button onClick={checkStartTime}>Set Start Time</button>
                    <h3>Start Time: {start}</h3>
                </div>
                <div className="col-sm-12 col-md-6 form-group">
                    <label htmlFor="formControlRange">Choose an end time</label>
                    <input type="time" id="endTime" max='04:00' defaultValue='04:00' required />
                    <button onClick={checkEndTime}>Set End Time</button>
                    <h3>End Time: {end}</h3>
                </div>
                {/* <div className='col-12'>
                    <button onClick={handleClick} title='Calculate'>Calculate Pay</button>
                </div> */}
            </form>
        </div>
    )
}

// class Hours extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             hours: []
//         }
//     }
//     render() {
//         return (
//             <div className='row m-3'>
//                 <h1 className='col-12'>Hours:</h1>
//                 <form className='col-12 slider'>
//                     <div class="form-group">
//                         <label for="formControlRange">Example Range input</label>
//                         <input type="range" class="form-control-range" id="formControlRange" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default Hours