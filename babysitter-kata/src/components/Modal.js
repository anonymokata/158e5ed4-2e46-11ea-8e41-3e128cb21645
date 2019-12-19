import React, { Component } from 'react'

function Modal(props) {
    // eslint-disable-next-line no-useless-constructor
    return (
        <div id='modalBackground'>
            <div id='modalContent'>
                <p id='modalMessage'>{props.message}</p>
                <button className='' onClick={props.dismissModal}>Dismiss</button>
            </div>
        </div>
    )
}

export default Modal
