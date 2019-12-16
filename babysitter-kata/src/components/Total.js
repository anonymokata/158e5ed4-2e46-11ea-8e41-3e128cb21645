import React from 'react'

function Total(props) {
    function calculateTotal() {
        if (props.family === 'A') {
            console.log('the family is A!')
        } else if (props.family === 'B') {

        } else {

        }
    }
    return (
        <div>
            <h1>$$$</h1>
            <h2>You will make ${props.money} tonight</h2>
        </div>
    )
}

export default Total