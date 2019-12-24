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
  test('it shows the select dropdown when rendered', () => {
    act(() => {
      ReactDOM.render(<Hours />, container)
    })
    const startTime = container.getElementsByTagName('select')[0];
    expect(startTime.value).toBe('Select a start time')
  })
  test('it shows a start time of 05:00 pm when selected', () => {
    act(() => {
      ReactDOM.render(<Hours am='05:00 pm' />, container)
      // startTime.dispatchEvent(new UIEvent('select', { target: {value: 17 }}))
    })
    const h3Start = container.getElementsByTagName('h3')[1];
    expect(h3Start.textContent).toBe('Start Time: 05:00 pm');
  })
  test('it shows an end time of 01:00 am when selected', () => {
    act(() => {
      ReactDOM.render(<Hours pm='01:00 am' />, container)
      // startTime.dispatchEvent(new UIEvent('select', { target: {value: 17 }}))
    })
    const h3End = container.getElementsByTagName('h3')[3];
    expect(h3End.textContent).toBe('End Time: 01:00 am');
  })
  test('it shows a start time of 05:00 pm and end time of 01:00 am when selected', () => {
    act(() => {
      ReactDOM.render(<Hours am='05:00 pm' pm='01:00 am' />, container)
      // startTime.dispatchEvent(new UIEvent('select', { target: {value: 17 }}))
    })
    const h3Start = container.getElementsByTagName('h3')[1];
    expect(h3Start.textContent).toBe('Start Time: 05:00 pm');
    const h3End = container.getElementsByTagName('h3')[3];
    expect(h3End.textContent).toBe('End Time: 01:00 am');
  })

})
