import React from 'react'

function Hours(props) {
    return (
        <div className='row m-3'>
            <h1 className='col-12'>Hours:</h1>
            <form className='col-12 timeForm'>
                <div className="col-sm-12 col-md-6 form-group">
                    <label className='font-weight-bold' htmlFor="formControlRange">Choose a start time</label>
                    <input type="time" id="startTime" min='17:00' defaultValue='17:00' required />
                    <button onClick={props.checkStartTime}>Set Start Time</button>
                    <h3>Start Time: {props.start}</h3>
                </div>
                <div className="col-sm-12 col-md-6 form-group">
                    <label className='font-weight-bold' htmlFor="formControlRange">Choose an end time</label>
                    <input type="time" id="endTime" max='04:00' defaultValue='04:00' required />
                    <button onClick={props.checkEndTime}>Set End Time</button>
                    <h3>End Time: {props.end}</h3>
                </div>
            </form>
            <h3 className='col-12'>Total Hours Worked: {props.hours}</h3>
        </div>
    )
}

export default Hours