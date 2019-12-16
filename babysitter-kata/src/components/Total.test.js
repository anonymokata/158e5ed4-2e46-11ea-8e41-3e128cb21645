import React, { useState } from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Total from "./Total";

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
        //   console.log('text', text)
        //   console.log('input value', container.getElementsByTagName('input')[0].value)
        //   container.getElementsByTagName('input')[0].value = text
    }
    return (
        <h2 onClick={handleClick}>{text || props.text}</h2>
    )
}

describe("Family component", () => {
    test('it shows the expected text when clicked', () => {
        act(() => {
            ReactDOM.render(<Total money='50' />, container)
        })
        const h2 = container.getElementsByTagName('h2')[0];
        expect(h2.textContent).toBe('You will make $50 tonight')
        act(() => {
            ReactDOM.render(<Total money='200' />, container)
        })
        expect(h2.textContent).toBe('You will make $200 tonight');
    })
})