import React, { useState } from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from "./Modal";

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

// function Select(props) {
//   const [text, setText] = useState('');
//   function handleClick() {
//     setText('A');
//   }
//   return <select onClick={handleClick}>{text || props.text}</select>;
// }

describe("Modal component", () => {
  test('it shows the expected message when displayed', () => {
    act(() => {
      ReactDOM.render(<Modal message='Howdy' />, container)
    })
    const p = container.getElementsByTagName('p')[0];
    expect(p.textContent).toBe('Howdy')
    // act(() => {
    //   select.dispatchEvent(new UIEvent('select', { target: { value: 'A' } }))
    // })
    // expect(select.value).toBe('A');
  })
})