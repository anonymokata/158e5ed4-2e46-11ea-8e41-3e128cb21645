import React, { useState } from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Total from "./Total";
import { checkEndTime, checkStartTime } from "../App"

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

function Change(props) {
    const [text, setText] = useState('hello');
    function handleClick() {
        setText('50');
    }
    return (
        <h2 onClick={handleClick}>{text || props.text}</h2>
    )
}

describe("Total component", () => {
    test('it shows the calculate button when rendered', () => {
        const onClick = jest.fn()
        act(() => {
            ReactDOM.render(<Total />, container)
        })
        const button = container.getElementsByTagName('button')[0];
        expect(button.textContent).toBe('Calculate Pay');
    })
})