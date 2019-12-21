import React, { useState, useEffect } from 'react'

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
    }
    const [total, setTotal] = useState(0);
    let time = 0;
    function getKeyByValue(object, value) {
        return parseInt(Object.keys(object).find(key => object[key].includes(value)));
      }
    function calculateTotal() {
        let day = 0;
        let finalTotal = 0;
        if (props.family === '') {
            return props.setModalMessage('Please select a family to babysit for')
        }
        let family = familyPay[props.family]
        for (let i = 18; i < 18 + props.hours; i++) {
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
    }
    return (
        <div>
            <h1>$$$ {props.hours}</h1>
            <div className='col-12'>
                <button onClick={calculateTotal} title='Calculate'>Calculate Pay</button>
            </div>
            <h2>You will make ${total} tonight</h2>
        </div>
    )
}

export default Total