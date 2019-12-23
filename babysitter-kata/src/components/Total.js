import React, { useState } from 'react'
import familyPay from '../data/data'

function Total(props) {
    const [total, setTotal] = useState(0);
    let time = 0;
    function getKeyByValue(object, value) {
        // console.log('object:', object)
        // console.log('value:', value)
        // console.log(parseInt(Object.keys(object).find(key => object[key].includes(value))))
        return parseInt(Object.keys(object).find(key => object[key].includes(value)));
    };
    function calculateTotal() {
        let finalTotal = 0;
        console.log(props.family)
        console.log('end', props.end, 'start', props.start, 'day', props.day)
        if (props.family === '' || props.family.length > 1) {
            return props.setModalMessage('Please select a family to babysit for');
        } else if (props.start === '') {
            return props.setModalMessage('Please select a start time');
        } else if (props.end === '') {
            return props.setModalMessage('Please select an end time');
        // } else if (props.day === 1 && (parseInt(props.start) < parseInt(props.end) && props.day === 1)) {
        //     return props.setModalMessage('Start time must be before end time')
        } else if ((parseInt(props.end) <= parseInt(props.start) && props.day === 0) || (props.day === 1 && (parseInt(props.end) <= parseInt(props.start) && parseInt(props.start) < 5))) {
            return props.setModalMessage('Please enter valid start and end times')
        }
        // else if (props.end < props.start && (props.day === 0 || props.day === 1)) {
        //     return props.setModalMessage('Please enter valid start and end times');
        // }
        let family = familyPay[props.family]
        console.log('family:', family)
        console.log('start:', props.start, 'hours:', props.hours)
        for (let i = parseInt(props.start) + 1; i < parseInt(props.start) + 1 + props.hours; i++) {
            console.log('i:', i)
            if (i === 24) {
                console.log('its midnight')
                time = '00:00';
                finalTotal += getKeyByValue(family, time);
            } else if (i < 5) {
                // let x = i - 24
                time = `0${i}:00`
                finalTotal += getKeyByValue(family, time);
            } else if (i > 24) {
                let x = i - 24
                time = `0${x}:00`
                finalTotal += getKeyByValue(family, time);
            } else {
                time = `${i}:00`;
                finalTotal += getKeyByValue(family, time);
            }
        }
        console.log('final total', finalTotal)
        setTotal(finalTotal)
    };
    return (
        <div>
            <div className='col-12'>
                <button className='font-weight-bold p-3 m-3' onClick={calculateTotal} title='Calculate'>Calculate Pay</button>
            </div>
            {total > 0 ? <h2 className='bg-white p-4 mx-auto' id='total'>You will make ${total} tonight</h2> : <h2></h2>}
        </div>
    )
}

export default Total