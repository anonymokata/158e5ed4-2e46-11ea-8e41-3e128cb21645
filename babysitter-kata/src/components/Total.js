import React, { useState } from 'react'
import familyPay from '../data/data'

function Total(props) {
    const [total, setTotal] = useState(0);
    let time = 0;
    function getKeyByValue(object, value) {
        return parseInt(Object.keys(object).find(key => object[key].includes(value)));
    };
    function calculateTotal() {
        let finalTotal = 0;
        console.log(props.family)
        if (props.family === '' || props.family.length > 1) {
            return props.setModalMessage('Please select a family to babysit for');
        } else if (props.start === '') {
            return props.setModalMessage('Please select a start time');
        } else if (props.end === '') {
            return props.setModalMessage('Please select an end time');
        }
        let family = familyPay[props.family]
        for (let i = parseInt(props.start) + 1; i < parseInt(props.start) + 1 + props.hours; i++) {
            if (i === 24) {
                time = '00:00';
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