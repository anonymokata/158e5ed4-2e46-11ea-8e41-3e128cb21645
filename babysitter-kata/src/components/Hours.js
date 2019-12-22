import React from 'react'

function Hours(props) {
    return (
        <div className='row m-3'>
            <h1 className='col-12 p-2 bg-white titles'>Hours</h1>
            <form className='col-12 timeForm'>
                <div className="col-sm-12 col-md-6 form-group">
                    <label className='font-weight-bold p-2 text-white' htmlFor="formControlRange">Start time</label>
                    <input className='font-weight-bold px-5 mx-auto mb-2' type="time" id="startTime" min='17:00' defaultValue='17:00' required />
                    <button className='font-weight-bold p-3 mx-auto mb-2' onClick={props.checkStartTime}>Set Start Time</button>
                    {props.start !== '' ? <h3 className='mx-auto p-2 bg-white titles'>Start Time: {props.start}</h3> : <h3></h3>}
                </div>
                <div className="col-sm-12 col-md-6 form-group">
                    <label className='font-weight-bold p-2 text-white' htmlFor="formControlRange">End time</label>
                    <input className='font-weight-bold px-5 mx-auto mb-2' type="time" id="endTime" max='04:00' defaultValue='04:00' required />
                    <button className='font-weight-bold p-3 mx-auto mb-2' onClick={props.checkEndTime}>Set End Time</button>
                    {props.end !== '' ? <h3 className='mx-auto p-2 bg-white titles'>End Time: {props.end}</h3> : <h3></h3>}
                </div>
            </form>
            <h3 className='col-12 mx-auto p-2 bg-white titles'>Total Hours Worked: {props.hours}</h3>
        </div>
    )
}

export default Hours