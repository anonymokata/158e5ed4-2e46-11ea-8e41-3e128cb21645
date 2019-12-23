import React from 'react';
import START from '../data/startHours'
import END from '../data/endHours'

function Hours(props) {
    return (
        <div className='row m-3'>
            <h1 className='col-12 p-2 bg-white titles'>Hours</h1>
            <div className='row col-12 timeForm'>
                <div className='col-sm-12 col-md-6'>
                    <h3 className='font-weight-bold p-2 text-white'>Start time</h3>
                    <select className='mb-2' onChange={props.checkStartTime}>
                        <option>Select a start time</option>
                        {START.map((time) => (
                            <option key={time.time} className='dropdown-item' value={time.value}>{time.time}</option>
                        ))}
                    </select>
                    {props.start !== '' ? <h3 className='mx-auto p-2 bg-white titles'>Start Time: {props.am}</h3> : <h3></h3>}
                </div>
                <div className='col-sm-12 col-md-6'>
                    <h3 className='font-weight-bold p-2 text-white'>End time</h3>
                    <select className='mb-2' onChange={props.checkEndTime}>
                        <option>Select an end time</option>
                        {END.map((time) => (
                            <option key={time.time} className='dropdown-item' value={time.value}>{time.time}</option>
                        ))}
                    </select>
                    {props.end !== '' ? <h3 className='mx-auto p-2 bg-white titles'>End Time: {props.pm}</h3> : <h3></h3>}
                </div>
            </div>
            <h3 className='col-12 mx-auto p-2 bg-white titles'>Total Hours Worked: {props.hours}</h3>
        </div>
    )
}

export default Hours