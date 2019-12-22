import React, { useState } from 'react'

function Total(props) {
    let familyPay = {
        'A': {
            15: ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            20: ['00:00', '01:00', '02:00', '03:00', '04:00']
        },
        'B': {
            12: ['18:00', '19:00', '20:00', '21:00', '22:00'],
            8: ['23:00', '00:00'],
            16: ['01:00', '02:00', '03:00', '04:00']
        },
        'C': {
            21: ['18:00', '19:00', '20:00', '21:00'],
            15: ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00']
        }
    };
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
                <button className='m-3' onClick={calculateTotal} title='Calculate'>Calculate Pay</button>
            </div>
            {total > 0 ? <h2 className='bg-white p-4 mx-auto' id='total'>You will make ${total} tonight</h2> : <h2></h2>}
        </div>
    )
}

export default Total