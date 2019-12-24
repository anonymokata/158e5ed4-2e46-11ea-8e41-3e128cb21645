import React from 'react'

function Instructions() {
    return (
        <div className='mx-auto bg-white row'>
            <div className='d-flex flex-wrap mx-2 col-12'>
                <h4 className='col-12'>Instructions</h4>
                <ul className='col-6 text-left'>
                    <strong>The babysitter must:</strong>
                    <li className='col-12'>Start no earlier than 5:00PM</li>
                    <li className='col-12'>Leave no later than 4:00AM</li>
                    <li className='col-12'>Only babysit for one family per night</li>
                    <li className='col-12'>Start and end on the hour</li>
                </ul>
                <ul className='col-6 text-left'>
                    <strong>The job:</strong>
                    <li className='col'>Pays different rates for each family (based on bedtimes, kids and pets, etc...)</li>
                    <li className='col'>Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night</li>
                    <li className='col'>Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night</li>
                    <li className='col'>Family C pays $21 per hour before 9pm, then $15 the rest of the night</li>
                </ul>
            </div>
        </div>
    )
}

export default Instructions