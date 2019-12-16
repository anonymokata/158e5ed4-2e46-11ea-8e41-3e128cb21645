import React, { useState } from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hours from "./Hours";

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

function Select(props) {
  const [text, setText] = useState('hello');
  function handleClick() {
    setText('17:00');
    console.log('text', text)
    console.log('input value', container.getElementsByTagName('input')[0].value)
    container.getElementsByTagName('input')[0].value = text
  }
  return (
    <div>
      <input value={text || props.text}></input>
      <button onClick={handleClick}></button>
    </div>
  )
}

describe("Hours component", () => {
  test('it shows the start time when entered', () => {
    act(() => {
      ReactDOM.render(<Hours />, container)
    })
    const startTime = container.getElementsByTagName('input')[0];
    const button = container.getElementsByTagName('button')[0];
    expect(startTime.id).toBe('startTime')
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(startTime.value).toBe('17:00');
  })
})