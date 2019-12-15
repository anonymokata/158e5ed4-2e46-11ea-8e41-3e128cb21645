import React, { useState } from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Family from "./Family";

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
  const [text, setText] = useState('');
  function handleClick() {
    setText('A');
  }
  return <select onClick={handleClick}>{text || props.text}</select>;
}

describe("Family component", () => {
  test('it shows the expected text when clicked', () => {
    act(() => {
      ReactDOM.render(<Family />, container)
    })
    const select = container.getElementsByTagName('select')[0];
    expect(select.value).toBe('Select a Family')
    // act(() => {
    //   select.dispatchEvent(new UIEvent('select', { target: { value: 'A' } }))
    // })
    // expect(select.value).toBe('A');
  })
})