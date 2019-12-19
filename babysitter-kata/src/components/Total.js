import React, { useState, useEffect } from 'react'

function Total(props) {
    const [total, setTotal] = useState('0')
    function calculateTotal() {
        if (props.family === '') {
            return props.setModalMessage('Please select a family to babysit for')
        }
        if (props.family === 'A') {
            console.log('the family is A!')
            console.log(props.hours)
            if (props.hours) {
                let aTotal = props.hours * 15
                console.log(aTotal)
                setTotal(aTotal)
            }
            // let aTotal = (props.aBeforeHours * 15) + (props.aAfterHours * 20)
            // setTotal(aTotal)
        } else if (props.family === 'B') {
            console.log('the family is B!')
            let bTotal = 1
            setTotal(bTotal)
        } else {
            console.log('the family is C!')
            let cTotal = 2
            setTotal(cTotal)
        }
    }
    return (
        <div>
            <h1>$$$</h1>
            <div className='col-12'>
                <button onClick={calculateTotal} title='Calculate'>Calculate Pay</button>
            </div>
            <h2>You will make ${total} tonight</h2>
        </div>
    )
}

export default Total